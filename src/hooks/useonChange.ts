import { useCallback, useContext } from "react"

import PropertiesContext from "../contexts/PropertiesContext";

export const useonChange = () =>{
    const props = useContext(PropertiesContext)
    const onChange = useCallback(()=>{
        alert('should call onChange from props.')
        // props.onChange();
    },[]);

    return onChange;
}