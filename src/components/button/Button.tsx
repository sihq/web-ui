import "./Button.scoped.css";

import { Boundary, Enhancer, Loading } from "../../utilities";
import React, { useContext } from "react";
import {
  TypeOfEnhancer,
  TypeOfIntent,
  TypeOfShape,
  TypeOfSize,
  TypeOfVariant,
} from "../../types";

import SectionsContext from "../../contexts/SectionsContext";
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
  as?: keyof Pick<JSX.IntrinsicElements, "a" | "button" | "span">;
  onClick?: string | VoidFunction;
}

export const Button: React.FunctionComponent<
  ButtonProps & React.HTMLAttributes<HTMLOrSVGElement>
> = withProperties((props: ButtonProps) => {
  const {
    size,
    intent = "default",
    variant = "filled",
    shape,
    disabled,
    loading,
    children,
    as: Tag = "button",
    onClick,
    startEnhancer,
    endEnhancer,
    ...native
  } = props;
  const [, { increment, decrement }] = useContext(SectionsContext);
  let action = () => {};
  if (onClick === "next") {
    action = () => increment();
  } else if (onClick === "back") {
    action = () => decrement();
  } else {
    action = onClick;
  }

  return (
    <Tag
      onClick={action}
      className={classnames(["button", size, intent, variant, shape], {
        disabled,
        loading,
      })}
      disabled={disabled || loading}
      {...native}
    >
      <Loading />
      <Enhancer start />
      <span className="label">{children}</span>
      <Enhancer end />
    </Tag>
  );
});

export default Boundary(Button);
