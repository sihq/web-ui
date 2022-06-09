import Pin from "./pin";
import React from "react";
import Richtextbox from "./richtextbox";
import Textbox from './textbox'
import Toggle from "./toggle";
import classnames from "classnames";
import { withProperties } from "../../contexts/PropertiesContext";
export interface InputProps {
    type: 'textbox' | 'pin' | 'toggle'
}

export const Input = withProperties((props: InputProps)=>{
    const { type } = props
    switch(type) {
        case 'textbox':
            return <Textbox  />
        case 'richtextbox':
            return <Richtextbox {...props}  />
        case 'pin':
          return <Pin {...props} />
          case 'toggle':
            return <Toggle {...props} />
        default:
            return null;
      }
})

export default Input;
