import { HtmlTextarea } from './Textarea.style';
import React from "react";
import { withProperties } from "../../../contexts/PropertiesContext";

export interface TextareaProps {
 
}

export const Textarea = withProperties((props: TextareaProps)=>{
    const { ...native } = props
    return <HtmlTextarea className='textarea' {...native} />
})

export default Textarea;
