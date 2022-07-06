import { ComponentContext } from "../contexts";
import React from "react";

export interface withComponentProps {
  [key:string]: any
}

export default function withComponent<T extends object>(
  Component: React.ComponentType<T>
) {
  return (props: T & withComponentProps) => {
    const { ...native } = props;
    return (
      <ComponentContext.Provider value={native}>
        <Component {...(native as T)} />
      </ComponentContext.Provider>
    );
  };
}
