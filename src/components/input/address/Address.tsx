import {
  ExclamationCircleIcon,
  LocationMarkerIcon,
  OfficeBuildingIcon,
} from "@heroicons/react/outline";
import Modal, { Content, Footer, Header, Title } from "../../modal";
import React, { useState } from "react";

import AddressManual from "./AddressManual";
import { AddressWrapper } from "./Address.style";
import Button from "../../button";
import Textbox from "../textbox";

export interface AddressProps {}

export default function Address() {
  const [openManualAddress, setManualAddress] = useState(false);
  return (
    <>
      <AddressWrapper>
        <Textbox
          startEnhancer={() => (
            <span className="text-gray-500 ml-2 flex-shrink-0 w-4">
              <LocationMarkerIcon />
            </span>
          )}
        />
        <div className="text-amber-600 text-xs mt-1 flex items-center space-x-1">
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
        </div>
      </AddressWrapper>
      <Modal
        dismissable
        size="sm"
        isOpen={openManualAddress}
        callbacks={{ close: () => setManualAddress(false) }}
      >
        <Header>
          <Title title="Enter manual address" icon={<OfficeBuildingIcon />} />
        </Header>
        <Content>
          <AddressManual />
        </Content>
        <Footer>
          <span>
            <Button
              variant="transparent"
              intent="tertiary"
              onClick={() => setManualAddress(false)}
            >
              Cancel
            </Button>
          </span>
          <span>
            <Button intent="primary">Done</Button>
          </span>
        </Footer>
      </Modal>
    </>
  );
}
