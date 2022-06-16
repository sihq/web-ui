import { STREET_TYPE } from './constants';
import { TypeOfAddress } from '../../../types';

function toTitleCase(str:string) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return `${txt.charAt(0)}`.toUpperCase() + `${txt.substr(1)}`.toLowerCase();
      }
    );
  }

/** 
 * Where possible this function takes the users input and
 * Google's address information and enhances it with more
 * accurate subpremise/unit information
 */
export const transformGoogleResponse = (
  label: string,
  res: google.maps.GeocoderAddressComponent[],
  regionSearchOnly?: boolean
): TypeOfAddress => {
  label = `${label}`.toLowerCase();

  // pick the easily determined properties from response
  const { short_name: postcode = '' } = res.find((curr) => curr.types.includes('postal_code')) || {};
  let { short_name: state = '' } = res.find((curr) => curr.types.includes('administrative_area_level_1')) || {};
  let { long_name: streetName = '' } = res.find((curr) => curr.types.includes('route')) || {};
  let { short_name: streetNumber = '' } = res.find((curr) => curr.types.includes('street_number')) || {};
  const { long_name: suburb = '' } = res.find((curr) => curr.types.includes('locality')) || {};
  const { long_name: country = '' } = res.find((curr) => curr.types.includes('country')) || {};
  let unit = '';

  // Google has no concept of "street". See if we recognise a streetType from
  // the route then use that to generate streetName and streetType
  // streetType default to 'street' if regionSearchOnly is false
  const street = streetName.trim().split(' ');
  const streetTypeWith = street[street.length - 1];
  let streetType = !regionSearchOnly ? 'Street' : '';
  if (STREET_TYPE.find((streetType) => streetType.label === streetTypeWith)) {
    streetType = streetTypeWith;
  }

  streetName = streetName.replace(streetType, '').trim();

  // edge case, state is listed as JBT for jervis bay when it should be ACT. Naughty Google
  if (state === 'JBT') {
    state = 'ACT';
  }

  // check for unit / subpremise info by crossreferencing against user input
  const streetNumberData = label.substring(0, label.indexOf(`${streetName}`.toLowerCase())).trim();
  if (streetNumberData !== streetNumber) {
    if (streetNumberData.includes('/')) {
      unit = `${streetNumberData.substring(0, streetNumberData.indexOf('/'))}`.replace(/\D/g,'')
    } else {
      streetNumber = streetNumberData;
    }
  }

  return {
    buildingName: '',
    country,
    deliveryAddress: '',
    level: '',
    lotSection: '',
    postcode,
    state,
    streetName,
    streetNumber,
    streetSuffix: '',
    streetType,
    suburb,
    unit,
  };
};

const formattedAddress = (formatString: string, addressPart: string, concatBefore = '', concatAfter = '') => {
  return formatString.concat(concatBefore, addressPart, concatAfter);
};

export const getFormattedString = (address: TypeOfAddress) => {
  let formatString = '';

  formatString = address.unit ? formattedAddress(formatString, address.unit, '', '/') : formatString;
  formatString = address.deliveryAddress ? formattedAddress(formatString, address.deliveryAddress, '') : formatString;
  formatString = address.lotSection
    ? formattedAddress(formatString, address.lotSection.replace(/lot\s*/gi, ''), 'Lot. ', ' ')
    : formatString;
  formatString = address.level ? formattedAddress(formatString, address.level, ' Level ', ', ') : formatString;
  formatString = address.buildingName ? formattedAddress(formatString, address.buildingName, ' ', ' ') : formatString;
  formatString = address.streetNumber ? formattedAddress(formatString, address.streetNumber) : formatString;
  formatString = address.streetName ? formattedAddress(formatString, address.streetName, ' ') : formatString;
  formatString = address.streetType ? formattedAddress(formatString, address.streetType, ' ') : formatString;
  formatString = address.streetSuffix ? formattedAddress(formatString, address.streetSuffix, ' ') : formatString;
  formatString = address.suburb ? formattedAddress(formatString, toTitleCase(address.suburb), ', ') : formatString;
  formatString = address.state ? formattedAddress(formatString, address.state.toUpperCase(), ', ') : formatString;
  formatString = address.postcode ? formattedAddress(formatString, address.postcode, ' ') : formatString;
  formatString = address.country ? formattedAddress(formatString, toTitleCase(address.country), ', ') : formatString;

  return formatString.replace(/^,/g, '').trim();
};