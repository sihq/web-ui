import React, { createContext, useCallback, useContext, useState } from "react";

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
export interface withFormProps {
  callbacks?: {
    restrainFocus?: () => void;
    releaseFocus?: () => void;
    clearState?: () => void;
    submit?: () => void;
    setState?: (value: object) => void;
  };
}

const FormContext = createContext<FormContextProps | null>(null);

export function withForm<T extends object>(Component: React.ComponentType<T>) {
  return (props: T & withFormProps) => {
    const { callbacks, ...native } = props;
    const [state, applyState] = useState({});
    const [isFocued, applyFocus] = useState(false);
    const [isSubmitting, applySubmitting] = useState(false);

    const restrainFocus = useCallback(() => {
      return new Promise<void>((complete) => {
        callbacks?.restrainFocus && callbacks?.restrainFocus();
        applyFocus(true);
        complete();
      });
    }, [callbacks]);

    const releaseFocus = useCallback(() => {
      return new Promise<void>((complete) => {
        callbacks?.releaseFocus && callbacks?.releaseFocus();
        applyFocus(false);
        complete();
      });
    }, [callbacks]);

    const clearState = useCallback(() => {
      return new Promise<void>((complete) => {
        callbacks?.clearState && callbacks?.clearState();
        applyState({});
        complete();
      });
    }, [callbacks]);

    const setState = useCallback(
      (value: object) => {
        return new Promise<void>((complete) => {
          callbacks?.setState && callbacks?.setState(value);
          applyState({ ...state, ...value });
          complete();
        });
      },
      [callbacks]
    );

    const submit = useCallback(() => {
      return new Promise<void>((complete, failed) => {
        applySubmitting(true);

        setTimeout(() => {
          // simulate network request
          callbacks?.submit && callbacks?.submit();
          applySubmitting(false);
          complete();
        }, 3000);
      });
    }, [callbacks]);

    return (
      <FormContext.Provider
        value={{
          state,
          isFocued,
          isSubmitting,
          setState,
          clearState,
          restrainFocus,
          releaseFocus,
          submit,
        }}
      >
        <Component {...(native as T)} />
      </FormContext.Provider>
    );
  };
}

export const useForm = () => {
  const context = useContext(FormContext);
  if (context === null) {
    throw new Error("Cannot use useForm outside of form.");
  }
  return context;
};

export default FormContext;
