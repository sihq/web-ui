import { Editor, InputWrapper } from "./Richtextbox.style";
import React, { createRef, useCallback, useEffect, useState } from "react";

import Button from "../../button";
import ContentEditable from "react-contenteditable";
import Toolbar from "./toolbar";
import classnames from "classnames";
import { withProperties } from "../../../contexts/PropertiesContext";

export interface TextboxProps {}

export const Richtextbox = withProperties((props: TextboxProps) => {
  const { ...native } = props;
  const editor = createRef<HTMLDivElement>();

  const [html, setHtml] = useState("");

  return (
    <>
      <input type="hidden" />

      <InputWrapper>
        <div className="flex flex-col flex-1">
          <ContentEditable
            innerRef={editor}
            tagName={Editor}
            html={html}
            disabled={false}
            onChange={(evt) => setHtml(evt.target.value)} // handle innerHTML change
            onBlur={() => {}}
          />

          <Toolbar editor={editor} />
        </div>
      </InputWrapper>
    </>
  );
});

export default Richtextbox;
