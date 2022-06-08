import Input from "../input";
import Label from "../label";
import React from "react";

export interface FieldProps {

}

const Field = (props: FieldProps) => {

  // useonChange
  // useonBlur
  // useonFocus
  // useonKeydown
  // useonKeyUp
  // useonClick
  
  return (
    <section>
      <Label>Pin</Label>
      <Input type="pin" />
    </section>
  );
};
export default Field;
