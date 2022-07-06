import React, { FunctionComponent } from "react";

import { Component } from "../../../utilities";
import Textbox from "../textbox";

export interface CurrencyProps {}

const Currency: FunctionComponent<CurrencyProps> = () => {
  return (
    <Component>
      <Textbox startEnhancer={()=><span className="h-full flex items-center pl-2"><span className="text-slate-400 pr-2">AUD</span> $</span>} />
    </Component>
  );
};

export default Currency;
