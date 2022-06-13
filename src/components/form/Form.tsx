import React, { useEffect } from "react";

import FocusLock from "react-focus-lock";
import { useForm } from "../../hooks";
import { withForm } from "../../hocs";

export interface FormProps {
  action?: string;
  method?: "get" | "post";
  enctype?:
    | "application/x-www-form-urlencoded"
    | "multipart/form-data"
    | "text/plain";
  children?: React.ReactNode;
  autofocus?: boolean;
}

// Synthetic form purpose

const Form = (props: FormProps) => {
  const { action, children, autofocus = true } = props;
  const { isFocued, releaseFocus, restrainFocus } = useForm();

  useEffect(() => { autofocus ? restrainFocus() : releaseFocus() }, [autofocus]);
  
  return (
    <section>
      <FocusLock disabled={!isFocued}>{children}</FocusLock>
    </section>
  );
};
export default withForm(Form);
