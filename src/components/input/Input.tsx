import {
  Address,
  Email,
  Pin,
  Richtextarea,
  Textarea,
  Textbox,
  Toggle,
} from "./";
import Builder, { BuilderProps } from "./builder";
import Phone, { PhoneProps } from "./phone";

import { AddressProps } from "./address";
import { EmailProps } from "./email";
import { PinProps } from "./pin/Pin";
import React from "react";
import { RichtextareaProps } from "./richtextarea";
import { TextareaProps } from "./textarea";
import { TextboxProps } from "./textbox";
import { ToggleProps } from "./toggle";
import { withProperties } from "../../contexts/PropertiesContext";

export interface BaseInputProps {
  type:
    | "textbox"
    | "textarea"
    | "richtextarea"
    | "pin"
    | "toggle"
    | "address"
    | "email"
    | "phone"
    | "builder";
}

// Input/output options
type Overload = {
  (props: TextboxProps & BaseInputProps): JSX.Element;
  (props: PinProps & BaseInputProps): JSX.Element;
  (props: TextareaProps & BaseInputProps): JSX.Element;
  (props: RichtextareaProps & BaseInputProps): JSX.Element;
  (props: ToggleProps & BaseInputProps): JSX.Element;
  (props: AddressProps & BaseInputProps): JSX.Element;
  (props: EmailProps & BaseInputProps): JSX.Element;
  (props: PhoneProps & BaseInputProps): JSX.Element;
  (props: BuilderProps & BaseInputProps): JSX.Element;
};

type InputProps = BaseInputProps & Overload;

export const Input: InputProps = withProperties((config: InputProps) => {
  const { type, ...props } = config;
  switch (type) {
    case "textbox":
      return <Textbox {...props} />;
    case "textarea":
      return <Textarea {...props} />;
    case "richtextarea":
      return <Richtextarea {...props} />;
    case "pin":
      return <Pin {...props} />;
    case "toggle":
      return <Toggle {...props} />;
    case "address":
      return <Address {...props} />;
    case "email":
      return <Email {...props} />;
    case "phone":
      return <Phone {...props} />;
    case "builder":
      return <Builder {...props} />;
    default:
      return <></>;
  }
});

export default Input;
