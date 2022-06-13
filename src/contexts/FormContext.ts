import { createContext } from "react";

export interface FormContextProps {
  state: object;
  isFocued: boolean;
  isSubmitting: boolean;
  setState: (value: object) => Promise<void>;
  clearState: () => Promise<void>;
  restrainFocus: () => Promise<void>;
  releaseFocus: () => Promise<void>;
  submit: () => Promise<void>;
}

export default createContext<FormContextProps | null>(null);
