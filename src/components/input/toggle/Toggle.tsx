import './Toggle.scoped.css';

import PropertiesContext, { withProperties } from "../../../contexts/PropertiesContext";
import React, { useContext, useState } from "react";

export interface ToggleProps {
    children?: React.ReactNode
}

export const Toggle = withProperties((props: ToggleProps) =>{
    const { children } = props
    return (
        <span
        data-input="checkbox"
        className="toggle flex relative flex-col"
    >
        <label data-input="toggle" className="flex justify-start items-center relative">
            <div className="switch relative flex-shrink-0 rounded-full w-7 h-4 transition duration-200 ease-linear">
                <input
                    type="checkbox"
                    className="opacity-0 absolute inset-0 w-full h-full z-40" 
                />
                <span className="checked opacity-0 bg-emerald-500 absolute z-10 left-0 w-full h-full rounded-full transition duration-100 ease-linear"></span>
                <span className="bg-gray-400 absolute left-0 w-full h-full rounded-full"></span>
                <span className="checked-peg absolute z-20 left-0 bg-white w-3 h-3 m-0.5 rounded-full transition transform duration-100 ease-linear cursor-pointer translate-x-0"></span>
            </div>
     
                <div className="label select-none flex flex-col pl-2">
                 {children}
                </div>
        </label>
     
    </span>
    );
})

export default Toggle;
