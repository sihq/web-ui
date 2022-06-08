import FocusLock from "react-focus-lock";
import React from "react";

export interface FormProps {
  action?: string;
  method?: "get" | "post";
  enctype?:
    | "application/x-www-form-urlencoded"
    | "multipart/form-data"
    | "text/plain";
  children?: React.ReactNode;
  focus?: boolean;
}

// Synthetic form purpose

const Form = (props: FormProps) => {
  const { action, children, focus = true } = props;
  return (
    <section>
      <FocusLock disabled={!focus}>{children}</FocusLock>
    </section>
  );
};
export default Form;
