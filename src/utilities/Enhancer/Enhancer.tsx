import "./Enhancer.scoped.css";

import React, { useContext } from "react";

import PropertiesContext from "../../contexts/PropertiesContext";

export interface EnhancerProps{
  start?: boolean;
  end?:  boolean;
}

export const Enhancer = ({ start, end }: EnhancerProps) =>{
  const { startEnhancer, endEnhancer } = useContext<any>(PropertiesContext)
    if(start && startEnhancer){
      return <span className="enhancer">{startEnhancer()}</span>;
    } 
    if(end && endEnhancer){
      return <span className="enhancer">{endEnhancer()}</span>;
    }
    return null;
  };
export default Enhancer;