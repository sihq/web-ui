import './Textbox.scoped.css';

import React from "react";
import classnames from "classnames";
import { withProperties } from "../../../contexts/PropertiesContext";

export interface TextboxProps {
    inputRef: any
}

export const Textbox = withProperties((props: TextboxProps)=>{
    const { inputRef, ...native } = props
    return <input className='textbox' type="text" ref={inputRef} {...native} />
})

export default Textbox;
