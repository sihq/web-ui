import { createContext } from "react";

export interface ComponentContextProps {
  [key:string]: any
}

export default createContext<ComponentContextProps | null>(null);
