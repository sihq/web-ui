import React, { FunctionComponent } from "react";
import { getBlockByName, getContentBlockById } from "../utilities";

import blocks from "../blocks";
import { useComponent } from "../../../../hooks";

interface PropertiesProps {}

const Properties: FunctionComponent<PropertiesProps> = () => {
  const { selected } = useComponent();

  const contentblock = getContentBlockById(selected);
  const Block = getBlockByName(contentblock?.name);
  
  if (!selected || !Block) {
    return <></>;
  }
  return (
    <>
      <div className="flex flex-col items-center px-2 py-5 mx-4 mb-5 space-y-2 text-center border-b border-slate-300">
        <div className="w-20 h-10 flex items-center justify-center bg-slate-200 rounded">
          {Block?.icon}
        </div>
        <div className="text-xs text-gray-600 tracking-wider flex-grow font-bold uppercase">
          {Block?.name}
          {Block?.description ? (
            <div className="text-xs text-gray-400 tracking-wider font-normal normal-case">
              {Block?.description}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Properties;
