import {
  ExclamationCircleIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";
import { ManualEntry, Suggestions } from "./parts";
import PlacesAutocomplete, {
  geocodeByAddress,
} from "react-places-autocomplete";
import React, { FunctionComponent, useState } from "react";
import { getFormattedString, transformGoogleResponse } from "./utils";

import { Component } from "../../../utilities";
import Textbox from "../textbox";
import useScript from "react-script-hook";

export interface AddressProps {}

const Address: FunctionComponent<AddressProps> = () => {
  const [loading, error] = useScript({
    src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDedPUSXQBIHOiI_Mrw5aKTGEy4I9GX3sY&libraries=geometry,places,visualization",
  });

  const [address, setAddress] = useState<null | object>(null);
  const [query, setQuery] = useState<string>("");
  const [openManualAddress, setManualAddress] = useState(false);

  const onBlur = () => {
    if (!address) {
      setQuery("");
    }else{
      setQuery(getFormattedString(address));
    }
  };

  const handleSelect = (address: string) => {
    setQuery(address);
    setAddress({ address });

    geocodeByAddress(address).then((results) => {
      // console.log(results)
      const transformedResponse = transformGoogleResponse(
        address,
        results[0].address_components
      );
      const formated = getFormattedString(transformedResponse);

      setQuery(formated);
      setAddress(transformedResponse);

    });
  };

  if (loading) {
    return <></>;
  }

  const searchOptions = {
    location: new google.maps.LatLng(-34, 151),
    radius: 2000,
    types: ["address"],
  };

  return (
    <Component {...{openManualAddress, setManualAddress}}>
      <PlacesAutocomplete
        value={query}
        onChange={(address: string) => {
          setQuery(address);
        }}
        onSelect={handleSelect}
        children={(placesprops) => {
          const {
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          } = placesprops;
          return (
            <div className="flex relative flex-1">
              <Textbox
                {...getInputProps()}
                onBlur={onBlur}
                autocomplete="nope"
                startEnhancer={() => (
                  <span className="text-gray-500 ml-2 flex-shrink-0 w-4">
                    <LocationMarkerIcon />
                  </span>
                )}
                endEnhancer={() => (loading ? "L" : null)}
              />

              <Suggestions
                suggestions={suggestions}
                getSuggestionItemProps={getSuggestionItemProps}
              />
              <ManualEntry />
            </div>
          );
        }}
        onError={() => {}}
        searchOptions={searchOptions}
      ></PlacesAutocomplete>
      {/* <div className="text-amber-600 text-xs mt-1 flex items-center space-x-1">
        <ExclamationCircleIcon className="h-3 w-3" />
        <span>
          No matches found. Continue typing or
          <button
            onClick={() => setManualAddress(true)}
            className="underline font-semibold outline-none bg-transparent border-none hover:text-amber-800"
          >
            Enter address manually
          </button>
        </span>
      </div> */}
    </Component>
  );
};

export default Address;
