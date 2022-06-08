import React, { useCallback, useState } from "react";

export const State = (props)=>{
    const { children, toggle, reverts } = props
    const [state,setState] = useState({})


    const returnState = () =>{
        if(toggle){
            return state.toggle ?? false;
        }else{
            return state;
        }
    }

    const updateState = useCallback((update)=>{
        if(toggle){
            setState({toggle: !returnState() })
            if(reverts){
                setTimeout(()=>setState({toggle: returnState() }),3000)
            }
         
        }else{
            setState({...state, ...update})
        }
    },[state])

    return children([returnState(),updateState])
}
