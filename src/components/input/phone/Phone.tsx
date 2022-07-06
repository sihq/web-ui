import React, { FunctionComponent } from "react";

import { ChevronDownIcon } from "@heroicons/react/outline";
import { Component } from "../../../utilities";
import Textbox from "../textbox";

export interface PhoneProps {}

const Phone: FunctionComponent<PhoneProps> = (props) => {
  return (
    <Component props={props}>
      <Textbox
        className="order-2"
        endEnhancer={() => (
          <>
            <div className="flex items-center h-full border-r bg-slate-100 border-slate-200 pr-2 order-1">
              <select
                style={{ outlineOffset: "-4px" }}
                className="appearance-none focus-visible:outline-1 focus-visible:outline-gray-400 focus-visible:outline-dashed outline-none h-full pl-2 pr-3 border-none bg-transparent text-gray-500 rounded"
              >
                <option>(AU) +61</option>
              </select>
              <ChevronDownIcon className="h-3 w-3" />
            </div>
          </>
        )}
      />
    </Component>
  );
};

export default Phone;
