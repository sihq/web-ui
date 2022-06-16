import React, { FunctionComponent } from "react";

import { ChevronDownIcon } from "@heroicons/react/outline";
import Textbox from "../textbox";

export interface PhoneProps {}

const Phone: FunctionComponent<PhoneProps> = () => {
  return (
    <Textbox
      className="order-2"
      endEnhancer={() => (
        <>
          <div className="flex items-center h-full border-r bg-slate-100 border-slate-200 pr-2 order-1">
            <select className="appearance-none outline-none h-full pl-2 pr-3 border-none bg-transparent text-gray-500 rounded">
              <option>(AU) +61</option>
            </select>

            <ChevronDownIcon className="h-3 w-3" />
          </div>
        </>
      )}
    />
  );
};

export default Phone;
