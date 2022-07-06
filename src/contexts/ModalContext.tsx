import { createContext } from "react";

export interface ModalContextProps {
  isOpen: boolean;
  open: ()=> Promise<void>;
  close: (aborted?: boolean)=> Promise<void>;
}

export default createContext<ModalContextProps | null>(null);
