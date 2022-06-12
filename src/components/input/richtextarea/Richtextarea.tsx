import { Editor, InputWrapper } from "./Richtextbox.style";
import React, { useRef, useState } from "react";

import RichTextEditor from 'react-rte';
import { withProperties } from "../../../contexts/PropertiesContext";

export interface RichtextareaProps {}

export const Richtextbox = withProperties((props: RichtextareaProps) => {
  const { ...native } = props;
  
  const EditorRef = useRef<any>();
  
  const [html, setHtml] = useState(RichTextEditor.createValueFromString('<b>content</b>', 'html'));


  const toolbarConfig = {
      // Optionally specify the groups to display (displayed in the order listed).
      display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS'],
      INLINE_STYLE_BUTTONS: [
        {label: 'Bold', style: 'BOLD', className: 'custom-css-class'},
        {label: 'Italic', style: 'ITALIC'}
      ],
      BLOCK_TYPE_BUTTONS: [
        {label: 'UL', style: 'unordered-list-item'},
        {label: 'OL', style: 'ordered-list-item'}
      ]
  };

  return (
    <>
      <InputWrapper onClick={(e)=> e.target === e.currentTarget ? EditorRef.current._focus() : null}>
          <Editor ref={EditorRef} value={html} onChange={setHtml} toolbarConfig={toolbarConfig} />
      </InputWrapper>
    </>
  );
});

export default Richtextbox;
