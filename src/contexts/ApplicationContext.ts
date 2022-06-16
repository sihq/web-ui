import React, { createContext } from "react";

import { ModalProps } from "../components/modal/Modal";

export interface ApplicationContextProps {
  openModal: (Component: React.ReactNode, props?: ModalProps) => Promise<void>;
  closeModal: (Component: React.ReactNode) => Promise<void>;
}

export default createContext<ApplicationContextProps | null>(null);

