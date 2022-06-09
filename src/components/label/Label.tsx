import React from "react";

export interface LabelProps {
  children?: React.ReactNode;
}

const Label = (props: LabelProps) => {
  const { children } = props;
  return (
    <label>
        {children}
    </label>
  );
};
export default Label;
