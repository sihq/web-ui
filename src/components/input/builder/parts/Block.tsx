import {
  ChevronDownIcon,
  ChevronUpIcon,
  XIcon,
} from "@heroicons/react/outline";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";

import Button from "../../../button";
import blocks from "../blocks";
import { useComponent } from "../../../../hooks";

interface BlockProps {
  id: string;
  name: string;
  data: any;
}

const Block: FunctionComponent<BlockProps> = (props) => {
  const { id, name } = props;
  const { removeBlock, moveBlock, selected, select } = useComponent();
  const ref = useRef<HTMLButtonElement>();
  const [moved, setMoved] = useState(false);
  useEffect(() => {
    if (moved) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setMoved(false);
    }
  }, [moved]);

  const Block = blocks.filter((block) => block.name === name)[0].block;

  return (
    <button
      ref={ref}
      onClick={() => select(id)}
      className={`border  relative  rounded p-2 ${
        selected === id
          ? "outline cursor-default outline-slate-400 border-slate-400 ring-2 ring-slate-100 ring-opacity-25 shadow-inner"
          : "border-dashed cursor-pointer border-white hover:border-slate-400"
      }`}
    >
      <div className="bg-white opacity-0 inset-0 absolute z-10"></div>
      <Block />

      {selected === id ? (
        <>
          <div className="absolute top-0 left-10 bg-slate-400 text-xs text-white p-0.5 px-2 rounded-full transform -translate-y-1/2">
            {name}
          </div>
          <div className="absolute z-20 top-4 left-0 transform -translate-x-1/2 flex items-center space-x-1">
            <div className="flex flex-col space-y-1 p-1 rounded-full bg-slate-50 shadow-md">
              <span>
                <Button
                  shape="circle"
                  intent="secondary"
                  onClick={() => removeBlock(id)}
                >
                  <XIcon className="h-4 w-4 " />
                </Button>
              </span>
              <span>
                <Button
                  shape="circle"
                  onClick={() => {
                    moveBlock(id, "up");
                    setMoved(true);
                  }}
                >
                  <ChevronUpIcon className="h-4 w-4" />
                </Button>
              </span>
              <span>
                <Button
                  shape="circle"
                  onClick={() => {
                    moveBlock(id, "down");
                    setMoved(true);
                  }}
                >
                  <ChevronDownIcon className="h-4 w-4" />
                </Button>
              </span>
            </div>
          </div>
        </>
      ) : null}
    </button>
  );
};

export default Block;
