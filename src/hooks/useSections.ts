import { SectionsContext } from "../contexts";
import { useContext } from "react";

export default function useSections(){
    const context = useContext(SectionsContext);
    if (context === null) {
      throw new Error("Cannot use useSections outside of Sections.");
    }
    return context;
  };