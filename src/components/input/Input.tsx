import {
  Address,
  Builder,
  Currency,
  Email,
  Phone,
  Pin,
  Quantity,
  Richtextarea,
  Selectlist,
  Textarea,
  Textbox,
  Toggle,
  Transfer,
} from "./";

import { AddressProps } from "./address";
import { BuilderProps } from "./builder";
import { CurrencyProps } from "./currency";
import { EmailProps } from "./email";
import { PhoneProps } from "./phone";
import { PinProps } from "./pin";
import { QuantityProps } from "./quantity";
import React from "react";
import { RichtextareaProps } from "./richtextarea";
import { SelectlistProps } from "./selectlist";
import { TextareaProps } from "./textarea";
import { TextboxProps } from "./textbox";
import { ToggleProps } from "./toggle";
import { TransferProps } from "./transfer";
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
    | "builder"
    | "quantity"
    | "currency"
    | "transfer"
    | "selectlist";
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
  (props: QuantityProps & BaseInputProps): JSX.Element;
  (props: CurrencyProps & BaseInputProps): JSX.Element;
  (props: TransferProps & BaseInputProps): JSX.Element;
  (props: SelectlistProps & BaseInputProps): JSX.Element;
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
    case "quantity":
      return <Quantity {...props} />;
    case "currency":
      return <Currency {...props} />;
    case "transfer":
      return <Transfer {...props} />;
    case "selectlist":
      return <Selectlist {...props} />;
    default:
      return <></>;
  }
});

export default Input;
