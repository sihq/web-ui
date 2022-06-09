import "./Modal.scoped.css";

import React, { useEffect, useState } from "react";

import Button from "../button";
import { CSSTransition } from "react-transition-group";
import Form from "../form";
import ModalContext from "../../contexts/ModalContext";
import { Portal } from "../../utilities";
import { TypeOfSize } from "../../types";
import { XIcon } from "@heroicons/react/outline";
import useHotKeys from '@reecelucas/react-use-hotkeys'

export interface ModalProps {
  children?: React.ReactNode;
  open?: boolean;
  size?: TypeOfSize;

  onOpen?: VoidFunction;
  onClose?: VoidFunction;
  dismissable?: boolean;
}

const Modal = (props: ModalProps) => {
  const { children, size, open = false, dismissable, onClose, onOpen } = props;

  useEffect(()=>{
    if(open && onOpen instanceof Function){
      onOpen()
    }
    if(!open && onClose instanceof Function){
      onClose()
    }
  },[onOpen,onClose,open])

  useHotKeys('Escape', () => {
    if(open && onClose instanceof Function){
      onClose() 
    }
  });
  
  return <Portal><ModalContext.Provider value={{ isOpen: open }}>
  <CSSTransition in={open} timeout={300} classNames="alert" unmountOnExit><div className="dialog">
      <div className="overlay"></div>
      <div className={`modal ${size}`}>
      <Form focus>
        {children}
        {dismissable && onClose instanceof Function ? (
          <span className="close">
            <Button shape="circle" intent="secondary" onClick={()=>onClose()}>
              <XIcon style={{ height: 16, width: 16 }} />
            </Button>
          </span>
        ) : null}
        </Form>
      </div>
    </div></CSSTransition></ModalContext.Provider></Portal>;
};

export default Modal;
