import React from "react";
import { TypeOfEnhancer } from "../types";

export const Accessory = ({ Enhancer }: { Enhancer?: TypeOfEnhancer }) =>{
    return Enhancer ? <span><Enhancer /></span> : null;
  };
export default Accessory;