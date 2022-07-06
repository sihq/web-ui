import React, { useCallback, useState } from "react";

import { ModalContext } from "../contexts";

export interface withModalProps {
    isOpen?: boolean;
    callbacks?: {
      open?: () => void
      close?: (aborted: boolean) => void
    };
  }

export default function withModal<T extends object>(Component: React.ComponentType<T>) {
    return (props: T & withModalProps) => {
      const { callbacks, ...native } = props;
      const [isOpen, applyOpen] = useState(false);
      const open = useCallback(() => {
        return new Promise<void>((complete) => {
          callbacks?.open && callbacks?.open();
          applyOpen(true);
          complete();
        });
      }, [callbacks]);
  
      const close = useCallback((aborted:boolean = false) => {
        return new Promise<void>((complete) => {
          callbacks?.close && callbacks?.close(aborted);
          applyOpen(false);
          complete();
        });
      }, [callbacks]);
  
      return (
        <ModalContext.Provider
          value={{
            isOpen,
            open,
            close,
          }}
        >
          <Component {...(native as T)} />
        </ModalContext.Provider>
      );
    };
  }
  