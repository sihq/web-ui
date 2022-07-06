import React, { FunctionComponent, useRef, useState } from "react";

import { Component } from "../../../utilities";
import { Input } from "./parts";
// import RichTextEditor, { ToolbarConfig } from "react-rte";


export interface RichtextareaProps {}

// const REACT_RTE_CONFIG = {
//   display: ["INLINE_STYLE_BUTTONS", "BLOCK_TYPE_BUTTONS", "LINK_BUTTONS"],
//   INLINE_STYLE_BUTTONS: [
//     { label: "Bold", style: "BOLD", className: "custom-css-class" },
//     { label: "Italic", style: "ITALIC" },
//   ],
//   BLOCK_TYPE_BUTTONS: [
//     { label: "UL", style: "unordered-list-item" },
//     { label: "OL", style: "ordered-list-item" },
//   ],
// } as ToolbarConfig;

const Richtextarea: FunctionComponent<RichtextareaProps> = (props) => {
  const { ...native } = props;

  const EditorRef = useRef<any>();
  return <>input</>;
  // const [value, setValue] = useState(
  //   RichTextEditor.createValueFromString("<b>content</b>", "html")
  // );

  // return (
  //   <Component value={value} setValue={setValue} props={props}>
  //     <div
  //       onClick={(e) =>
  //         e.target === e.currentTarget ? EditorRef.current._focus() : null
  //       }
  //       className="border-solid p-1 px-2 flex items-center justify-center relative border-2 outline-none transition-all ease-in-out duration-200 flex-1 bg-white border-gray-300 rounded text-gray-700 focus-within:ring-2 focus-within:shadow-inner  focus-within:border-blue-400 focus-within:ring-blue-400 focus-within:ring-opacity-20"
  //     >
  //       <Input
  //         ref={EditorRef}
  //         value={value}
  //         onChange={setValue}
  //         toolbarConfig={REACT_RTE_CONFIG}
  //       />
  //     </div>
  //   </Component>
  // );
};

export default Richtextarea;
