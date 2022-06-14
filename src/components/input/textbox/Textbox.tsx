import { HtmlTextbox, InputWrapper } from "./Textbox.style";

import { Enhancer } from "../../../utilities";
import React from "react";
import { TypeOfEnhancer } from "../../../types";
import { withProperties } from "../../../contexts/PropertiesContext";

export interface TextboxProps {
  inputRef?: any;
  autofocus?: boolean;
  startEnhancer?: TypeOfEnhancer;
  endEnhancer?: TypeOfEnhancer;
}

export const Textbox = withProperties((props: TextboxProps) => {
  const { inputRef, ...native } = props;
  return (
    <>
        <InputWrapper>
      <Enhancer start />
      <HtmlTextbox type="text" ref={inputRef ?? null} {...native} />
      <Enhancer end />
      </InputWrapper>
    </>
  );
});

export default Textbox;
