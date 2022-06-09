import { Editor, InputWrapper } from "./Richtextbox.style";
import React, { createRef, useCallback, useEffect, useState } from "react";

import Button from "../../button";
import ContentEditable from "react-contenteditable";
import RichTextEditor from 'react-rte';
import Toolbar from "./toolbar";
import classnames from "classnames";
import { withProperties } from "../../../contexts/PropertiesContext";

export interface TextboxProps {}

export const Richtextbox = withProperties((props: TextboxProps) => {
  const { ...native } = props;
  const editor = createRef<HTMLDivElement>();

  const [html, setHtml] = useState(RichTextEditor.createEmptyValue());

  const toolbarConfig = {
    // Optionally specify the groups to display (displayed in the order listed).
    display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS'],
    INLINE_STYLE_BUTTONS: [
      {label: 'Bold', style: 'BOLD', className: 'custom-css-class'},
      {label: 'Italic', style: 'ITALIC'}
    ],
    BLOCK_TYPE_DROPDOWN: [
      {label: 'Normal', style: 'unstyled'},
      {label: 'Heading Large', style: 'header-one'},
      {label: 'Heading Medium', style: 'header-two'},
      {label: 'Heading Small', style: 'header-three'}
    ],
    BLOCK_TYPE_BUTTONS: [
      {label: 'UL', style: 'unordered-list-item'},
      {label: 'OL', style: 'ordered-list-item'}
    ]
  };

  return (
    <>
      <input type="hidden" />

      <InputWrapper>
        <div className="flex flex-col flex-1">
          <Editor value={html} onChange={setHtml} toolbarConfig={toolbarConfig} />

        </div>
      </InputWrapper>
    </>
  );
});

export default Richtextbox;
