import "./Modal.scoped.css";

import React, { useEffect } from "react";

import Button from "../button";
import { CSSTransition } from "react-transition-group";
import Form from "../form";
import { Portal } from "../../utilities";
import { TypeOfSize } from "../../types";
import { XIcon } from "@heroicons/react/outline";
import useHotKeys from '@reecelucas/react-use-hotkeys'
import { useModal } from "../../hooks";
import { withModal } from "../../hocs";

export interface ModalProps {
  children?: React.ReactNode;
  size?: TypeOfSize;
  dismissable?: boolean;
  isOpen?: boolean;
}

const Modal = (props: ModalProps) => {
  const { children, size, dismissable, isOpen: opened } = props;

  const { isOpen, open, close } = useModal()

  useEffect(()=> { opened ? open() : close() },[opened])

  // useHotKeys('Escape', () => {
  //   if(open && onClose instanceof Function){
  //     onClose() 
  //   }
  // });
  
  return <Portal>
  <CSSTransition in={isOpen} timeout={300} classNames="alert" unmountOnExit><div className="dialog">
      <div className="overlay z-20"></div>
      <div className={`modal z-30 ${size}`}>
        {children}
        {dismissable ? (
          <span className="close">
            <Button shape="circle" intent="secondary" onClick={()=> close()}>
              <XIcon style={{ height: 16, width: 16 }} />
            </Button>
          </span>
        ) : null}
      </div>
    </div></CSSTransition></Portal>;
};


export default withModal(Modal);
