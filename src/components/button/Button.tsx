import "./Button.scoped.css";

import { Enhancer, Loading } from "../../utilities";
import {
  TypeOfEnhancer,
  TypeOfIntent,
  TypeOfShape,
  TypeOfSize,
  TypeOfVariant,
} from "../../types";

import React from "react";
import classnames from "classnames";
import { withProperties } from "../../contexts/PropertiesContext";

export interface ButtonProps {
  children?: React.ReactNode;


  shape?: TypeOfShape;

  size?: TypeOfSize;
  intent?: TypeOfIntent;
  variant?: TypeOfVariant;
  startEnhancer?: TypeOfEnhancer;
  endEnhancer?: TypeOfEnhancer;
  disabled?: boolean;
  loading?: boolean;
  as?: keyof Pick<JSX.IntrinsicElements, 'a' | 'button' | 'span'>
}

export const Button: React.FunctionComponent<ButtonProps & React.HTMLAttributes<HTMLOrSVGElement>> = withProperties((props: ButtonProps) => {
  const { size, intent, variant, shape, disabled, loading, children, as: Tag = 'button', ...native} = props
  return <Tag className={classnames(["button", size, intent, variant, shape], { disabled, loading })} disabled={disabled || loading} {...native}>
        <Loading />
        <Enhancer start />
        <span className="label">{children}</span>
        <Enhancer end />
  </Tag>;
});


export default Button;
