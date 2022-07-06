import blocks from "./blocks";
import { useComponent } from "../../../hooks";

export const getContentBlockById = (id: string) => {
  const { contentblocks } = useComponent();
  return contentblocks.find((contentblock: any) => contentblock.id === id);
};

export const getBlockByName = (name:string)=>{
    return blocks.find((block) => block.name === name);
}