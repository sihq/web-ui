import { Add, Block, Properties } from "./parts";
import React, { FunctionComponent, useState } from "react";
import { TypeOfBuilderBlock, TypeOfContentBlock } from "../../../types";

import { Component } from "../../../utilities";
import { v4 as uuidv4 } from "uuid";

export interface BuilderProps {}

const Builder: FunctionComponent<BuilderProps> = () => {
  const [blocks, setBlocks] = useState<TypeOfContentBlock[]>([]);
  const [selected, setSelected] = useState<string|null>();

  const addBlock = (block: TypeOfBuilderBlock) =>
    setBlocks([
      ...blocks,
      { id: uuidv4(), name: block.name, data: {} } as TypeOfContentBlock,
    ]);
  const removeBlock = (id: string) =>
    setBlocks([...blocks.filter((block) => block.id !== id)]);

  const moveBlock = (id: string, direction: "up" | "down") => {
    const index = blocks.findIndex((block) => block.id === id);
    const reorder = [...blocks];
    const f = reorder.splice(index, 1)[0];
    reorder.splice(direction === "up" ? index - 1 : index + 1, 0, f);
    setBlocks(reorder);
  };

  const select = (id: string) => setSelected(id);

  return (
    <Component
      contentblocks={blocks}
      addBlock={addBlock}
      removeBlock={removeBlock}
      moveBlock={moveBlock}
      selected={selected}
      select={select}
    >
      <div style={{minHeight: 200}} className="border-solid flex items-center justify-center relative border-2 outline-none transition-all ease-in-out duration-200 flex-1 bg-white border-gray-300 rounded text-gray-700 focus-within:ring-2 focus-within:shadow-inner focus-within:border-blue-400 focus-within:ring-blue-400 focus-within:ring-opacity-20 w-full items-stretch">
        <div className="space-y-2 flex-1 p-3 flex-1 flex flex-col p-10 space-y-2 overflow-auto">
          {blocks.map((block) => (
            <Block key={block.id} {...block} />
          ))}
          <Add />
          
        </div>
        <div className={`w-64 bg-slate-100 border-l border-slate-200`}>
          <Properties />
        </div>
      </div>
    </Component>
  );
};

export default Builder;
