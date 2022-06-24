import { createContext } from "react";

export interface ControllerContextProps {

  controller: string;

  isMounted: boolean;


  isRefreshing: boolean;
  isMounting: boolean;
  isDispatching: boolean;
  isQueued: boolean;
  
  scope:string;


  dispatch: (method:string,parameters: object)=> void
}

export default createContext<ControllerContextProps | null>(null);
