import React from "react";
import { withForm } from "../../hocs";

export interface FormProps {
  children?: React.ReactNode;
}

const Form = (props: FormProps) => {
  const { children} = props;
  return <>{children}</>
};
export default withForm(Form);
