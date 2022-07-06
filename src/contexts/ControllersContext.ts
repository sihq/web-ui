import { createContext } from "react";

export interface ControllersContextProps {
    mount: (uuid:string,controller:any)=> void
    dispatch: (controller:string,method:string,parameters: object)=> void
}

export default createContext<ControllersContextProps | null>(null);
