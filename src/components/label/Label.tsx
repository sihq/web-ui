import { HtmlLabel } from "./Label.style";
import React from "react";

export interface LabelProps {
  children?: React.ReactNode;
}

const Label = (props: LabelProps) => {
  const { children } = props;
  return (
    <HtmlLabel>
        {children}
    </HtmlLabel>
  );
};
export default Label;
