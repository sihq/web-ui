import React, { createContext, useCallback, useContext, useState } from "react";

import { ModalProps } from "../components/modal/Modal";
import Modals from "../utilities/Modals";

export interface ApplicationContextProps {
  openModal: (Component: React.ReactNode, props?: ModalProps) => Promise<void>;
  closeModal: (Component: React.ReactNode) => Promise<void>;
}

export interface withModalProps {}

const ApplicationContext = createContext<ApplicationContextProps | null>(null);

export function withApplication<T extends object>(
  Component: React.ComponentType<T>
) {
  return (props: T & withModalProps) => {
    const { ...native } = props;
    const [modals, applyModals] = useState<
      { modal: React.ReactNode; props?: ModalProps }[]
    >([]);

    const openModal = useCallback(
      (modal: React.ReactNode, props?: ModalProps) => {
        return new Promise<void>((complete) => {
          applyModals([...modals, { modal, props }]);
          complete();
        });
      },
      [modals]
    );
 
    const closeModal = useCallback((modal: React.ReactNode) => {
      return new Promise<void>((complete) => {
          applyModals([...modals.filter((m) => m.modal !== modal)]);
          complete();
      });
    }, [modals]);

    return (
      <ApplicationContext.Provider
        value={{
          openModal,
          closeModal
        }}
      >
        <Modals modals={modals} />
        <Component {...(native as T)} />
      </ApplicationContext.Provider>
    );
  };
}



export default ApplicationContext;
