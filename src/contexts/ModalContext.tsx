import React, { createContext } from "react";

export interface ModalContextProps {
  isOpen: boolean;
  close: VoidFunction;
  open: VoidFunction;
}

export const ModalContext = createContext<ModalContextProps>({
  isOpen: false,
  close: () => {},
  open: () => {},
});

export default ModalContext;
