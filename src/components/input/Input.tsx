import { Pin, Richtextarea, Textarea, Textbox, Toggle } from "./";

import { PinProps } from "./pin/Pin";
import React from "react";
import { RichtextareaProps } from "./richtextarea/Richtextarea";
import { TextareaProps } from "./textarea/Textarea";
import { TextboxProps } from "./textbox/Textbox";
import { ToggleProps } from "./toggle/Toggle";
import { withProperties } from "../../contexts/PropertiesContext";

export interface BaseInputProps {
    type: 'textbox' | 'textarea' | 'richtextarea' | 'pin' | 'toggle'
}


// Input/output options
type Overload = {
    (props: TextboxProps & BaseInputProps): JSX.Element;
    (props: PinProps & BaseInputProps): JSX.Element;
    (props: TextareaProps & BaseInputProps): JSX.Element;
    (props: RichtextareaProps & BaseInputProps): JSX.Element;
    (props: ToggleProps & BaseInputProps): JSX.Element;
  };

  type InputProps = BaseInputProps & Overload



export const Input: InputProps = withProperties((config: InputProps)=>{
    const { type, ...props } = config
    switch(type) {
        case 'textbox':
            return <Textbox {...props} />
        case 'textarea':
            return <Textarea {...props}  />
        case 'richtextarea':
            return <Richtextarea {...props}  />
        case 'pin':
          return <Pin {...props} />
          case 'toggle':
            return <Toggle {...props} />
        default:
            return null;
      }
})

export default Input;
