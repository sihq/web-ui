import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import React, { FunctionComponent, useState } from "react";

import Button from "../../button";
import { Component } from "../../../utilities";
import { List } from "./parts";

export interface TransferProps {
  items?: { [key: string]: any }[];
}

const Transfer: FunctionComponent<TransferProps> = (props) => {
  const { items = [] } = props;
  const [value, setValue] = useState<string[]>([]);

  return (
    <Component items={items} value={value} setValue={setValue} props={props}>
      <div
        style={{ height: 250 }}
        className="flex-1 border-solid flex place-self-stretch justify-center relative border-2 outline-none transition-all ease-in-out duration-200 flex-1 bg-white border-gray-300 rounded text-gray-700 focus-within:ring-2 focus-within:shadow-inner focus-within:border-blue-400 focus-within:ring-blue-400 focus-within:ring-opacity-20"
      >
        <div className="flex-1 p-4 flex flex-col space-y-2 overflow-auto">
          <List role="unselected" />
        </div>
        <div className="flex h-full  flex-col space-y-2 mx-4 justify-center w-px bg-slate-300">
          <div className="p-1 w-7 bg-slate-100 rounded-full transform -translate-x-1/2 space-y-1 shadow-inner flex flex-col justify-center">
            <span>
              <Button
                shape="circle"
                onClick={() => setValue([...items.map(({ id }) => id)])}
              >
                <ChevronRightIcon className="h-3 w-3" />
              </Button>
            </span>
            <span>
              <Button shape="circle" onClick={() => setValue([])}>
                <ChevronLeftIcon className="h-3 w-3" />
              </Button>
            </span>
          </div>
        </div>
        <div className="flex-1 h-full p-4 flex flex-col space-y-2 overflow-auto">
          <List role="selected" />
        </div>
      </div>
    </Component>
  );
};

export default Transfer;
