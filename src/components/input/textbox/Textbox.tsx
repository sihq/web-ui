import { HtmlTextbox } from './Textbox.style';
import React from "react";
import { withProperties } from "../../../contexts/PropertiesContext";

export interface TextboxProps {
    inputRef?: any
    autofocus?: boolean;
}

export const Textbox = withProperties((props: TextboxProps)=>{
    const { inputRef, ...native } = props
    return <HtmlTextbox type="text" ref={inputRef ?? null} {...native} />
})

export default Textbox;
