import React, { useCallback, useState } from "react";

import { ApplicationContext } from "../contexts";
import { ModalProps } from "../components/modal/Modal";
import Modals from "../utilities/Modals";

export interface withModalProps {}

export default function withApplication<T extends object>(
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
  