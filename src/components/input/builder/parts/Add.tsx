import React, { FunctionComponent } from "react";

import blocks from "../blocks";
import { useComponent } from "../../../../hooks";

interface AddProps {}

const Add: FunctionComponent<AddProps> = () => {
   const { addBlock } =  useComponent();

  return (
    <>
      <div className="p-3 flex">
        {blocks.map((block) => {
          const { icon } = block;
          return (
            <button
              key="block"
                onClick={()=>addBlock(block) }
              className="h-20 w-32 flex items-center justify-center bg-slate-100"
            >
              {icon}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Add;
