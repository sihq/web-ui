import Modal, { ModalProps } from "../../components/modal/Modal";

import React from "react";
import { useApplication } from "../../hooks";

export interface ModalsProps {
  modals: { modal: React.ReactNode; props?: ModalProps }[];
}

export default function Modals(props: ModalsProps){
  const { modals } = props
  const { closeModal } = useApplication();
  return <>{modals.map(({ modal, props = {} }) => {
    const { ...native } = props
    return (
    <>
      <Modal
        callbacks={{
          close: () => {
              setTimeout(()=> closeModal(modal),300) // Duration of animate out.
          }
        }}
        
        isOpen
        {...native}
      >
        {modal}
      </Modal>
    </>
  )})}</>;
};
