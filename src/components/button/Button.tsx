import "./Button.scoped.css";

import {
  TypeOfEnhancer,
  TypeOfIcon,
  TypeOfLabel,
  TypeOfShape,
  TypeOfSize,
  TypeOfVariant,
} from "../../types";

import { Accessory } from "../../utilities";
import React from "react";

export interface ButtonProps {
  label: TypeOfLabel;

  size?: TypeOfSize;
  variant?: TypeOfVariant;
  shape?: TypeOfShape;

  startEnhancer?: TypeOfEnhancer;
  endEnhancer?: TypeOfEnhancer;

  icon?: TypeOfIcon;
}

const Button = (props: ButtonProps): JSX.Element => {
  const { startEnhancer, endEnhancer } = props;

  return (
    <button className="button">
      <>
        <Accessory Enhancer={startEnhancer} />
        {props.label}
        <Accessory Enhancer={endEnhancer} />
      </>
    </button>
  );
};

export default Button;
