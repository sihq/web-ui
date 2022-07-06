import { HtmlTextbox, InputWrapper } from "./Textbox.style";
import React, { ChangeEvent } from "react";

import { Enhancer } from "../../../utilities";
import { TypeOfEnhancer } from "../../../types";
import { withProperties } from "../../../contexts/PropertiesContext";

export interface TextboxProps {
  className?: string;
  value?: string | number;
  inputRef?: any;
  autofocus?: boolean;
  startEnhancer?: TypeOfEnhancer;
  endEnhancer?: TypeOfEnhancer;

  onFocus?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
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
