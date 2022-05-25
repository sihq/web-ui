import Pin from "./pin";
import React from "react";
import Textbox from './textbox'
import classnames from "classnames";
import { withProperties } from "../../contexts/PropertiesContext";
export interface InputProps {
    type: 'textbox' | 'pin'
}

export const Input = withProperties((props: InputProps)=>{
    const { type } = props
    switch(type) {
        case 'textbox':
            return <Textbox />
        case 'pin':
          return <Pin />
        default:
            return null;
      }
})

export default Input;
