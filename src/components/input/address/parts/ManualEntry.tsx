import Modal, { Content, Footer, Header, Title } from "../../../modal";
import React, { FunctionComponent } from "react";

import Button from "../../../button";
import Label from "../../../label";
import { OfficeBuildingIcon } from "@heroicons/react/outline";
import Textbox from "../../textbox";
import { useComponent } from "../../../../hooks";

interface ManualEntryProps {
    
}
 
const ManualEntry: FunctionComponent<ManualEntryProps> = () => {
    const {openManualAddress, setManualAddress }= useComponent()
    return (
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
          <div className="flex flex-col space-y-3">
            <div className="flex space-x-4">
              <div className="flex flex-col">
                <Label>Unit no</Label>
                <Textbox />
              </div>
              <div className="flex flex-col">
                <Label>Lot no</Label>
                <Textbox />
              </div>
              <div className="flex flex-col">
                <Label>Level no</Label>
                <Textbox />
              </div>
            </div>
            <div className="flex flex-col">
              <Label>Building name</Label>
              <Textbox />
            </div>
            <div className="flex space-x-4">
              <div className="flex flex-col w-1/4">
                <Label>Street no</Label>
                <Textbox />
              </div>
              <div className="flex flex-col w-3/4">
                <Label>Street name</Label>
                <Textbox />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="flex flex-col w-1/2">
                <Label>Street type</Label>
                <Textbox />
              </div>
              <div className="flex flex-col w-1/2">
                <Label>Street suffix</Label>
                <Textbox />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="flex flex-col w-3/5">
                <Label>Suburb</Label>
                <Textbox />
              </div>
              <div className="flex flex-col w-2/5 ">
                <Label>Postcode</Label>
                <Textbox />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="flex flex-col w-2/5">
                <Label>State</Label>
                <Textbox />
              </div>
              <div className="flex flex-col w-3/5">
                <Label>Country</Label>
                <Textbox />
              </div>
            </div>
          </div>
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
    );
}
 
export default ManualEntry;