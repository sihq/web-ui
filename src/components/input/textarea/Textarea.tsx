import React, { ChangeEvent, FunctionComponent, useState } from "react";

import { Component } from "../../../utilities";

export interface TextareaProps {}

const Textarea: FunctionComponent<TextareaProps> = (props) => {
  const { ...native } = props;
  const [value, setValue] = useState("");
  return (
    <Component value={value} setValue={setValue} props={props}>
      <textarea
        onChange={({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) =>
          setValue(value)
        }
        value={value}
        className="border-solid p-1 px-2 flex items-center justify-center relative border-2 outline-none transition-all ease-in-out duration-200 flex-1 bg-white border-gray-300 rounded text-gray-700 focus-within:ring-2 focus-within:shadow-inner focus-within:border-blue-400 focus-within:ring-blue-400 focus-within:ring-opacity-20"
        {...native}
      />
    </Component>
  );
};

export default Textarea;
