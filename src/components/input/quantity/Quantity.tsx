import { Decrement, Increment } from "./parts";
import React, { ChangeEvent, FunctionComponent, useState } from "react";

import { Component } from "../../../utilities";
import Textbox from "../textbox";

export interface QuantityProps {
  min?: number;
  max?: number;
  multiplier?: number;
}

const Quantity: FunctionComponent<QuantityProps> = (props) => {
  const { min, max } = props;
  const [value, setValue] = useState<number>(0);

  return (
    <Component value={value} setValue={setValue} props={props}>
      <Textbox
        value={value}
        className="text-center"
        onFocus={(e) => e.target.select()}
        onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
          if (max === undefined || Number(value) <= max) {
            if (min === undefined || Number(value) >= min) {
              setValue(Number(value));
            }
          }
        }}
        startEnhancer={() => <Decrement />}
        endEnhancer={() => <Increment />}
      />
    </Component>
  );
};

export default Quantity;
