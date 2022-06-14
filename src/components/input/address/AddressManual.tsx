import Label from "../../label";
import React from "react";
import Textbox from "../textbox";

export interface AddressManualProps {}

export default function AddressManual() {
  return (
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
  );
}
