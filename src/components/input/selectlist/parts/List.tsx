import React, { FunctionComponent } from "react";

import { useComponent } from "../../../../hooks";

export interface ListProps {
  role: "selected" | "unselected";
}

export interface Item {
  [key: string]: any;
}

const List: FunctionComponent<ListProps> = (props) => {
  const { role } = props;
  const { setValue, value, items } = useComponent();

  const listItems =
    role === "unselected"
      ? items.filter(({ id }: Item) => !value.includes(id))
      : items.filter(({ id }: Item) => value.includes(id));

  return (
    <>
      {listItems.map((item: Item) => {
        const { id, text } = item;
        return (
          <button
            type="button"
            onClick={() => {
                if(role === 'unselected'){
                    setValue([...value, id])
                }else{
                    setValue([...value.filter((i:string)=>i!==id)])
                }
            }}
            className="flex items-center outline-none text-left p-2 bg-slate-50 relative rounded hover:bg-sky-50  hover:text-sky-700 select-none cursor-pointer"
          >
            {text}
          </button>
        );
      })}
    </>
  );
};

export default List;
