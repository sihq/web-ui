import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import React, { FunctionComponent, useState } from "react";

import Button from "../../button";
import { Component } from "../../../utilities";
import { List } from "./parts";

export interface SelectlistProps {
  items?: { [key: string]: any }[];
  multiple?: boolean
}

const Selectlist: FunctionComponent<SelectlistProps> = (props) => {
  const { items = [], multiple = false } = props;
  const [value, setValue] = useState<string | string[]| null>(multiple ? [] : null);
  const isMultiple = multiple && Array.isArray(value);
  return (
    <Component items={items} value={value} setValue={setValue} props={props}>
      <div
        style={{ height: 250 }}
        className="flex-1 border-solid flex place-self-stretch justify-center relative border-2 outline-none transition-all ease-in-out duration-200 flex-1 bg-white border-gray-300 rounded text-gray-700 focus-within:ring-2 focus-within:shadow-inner focus-within:border-blue-400 focus-within:ring-blue-400 focus-within:ring-opacity-20"
      >
        <div className="flex-1 p-4 flex flex-col space-y-2 overflow-auto">
        {items.map((item) => {
        const { id, text } = item;
       
        return (
          <button
           
            onClick={() => {
              if(isMultiple){
                if(!value.includes(id)){
                    setValue([...value, id])
                }else{
                    setValue([...value.filter((i:string)=>i!==id)])
                }
              }else{
                setValue(id)
              }
            }}
            className={`${(isMultiple && value.includes(id) || value === id) ? ' bg-sky-700 text-white' : 'bg-slate-50 hover:bg-sky-50 hover:text-sky-700'} active:transform active:scale-95 duration-200 transition-all ease-in-out flex items-center outline-none text-left p-2 relative rounded  select-none cursor-pointer`}
          >
            {text}
          </button>
        );
      })}
        </div>
   
      </div>
    </Component>
  );
};

export default Selectlist;
