import React, { createContext, useCallback, useState } from "react";

export const StateContext = createContext([null,(update:any)=>{}]);

export interface WithStateProps{}

export function withState<T extends WithStateProps = WithStateProps>(Component: React.ComponentType<T>){
    return (props: Omit<T, keyof WithStateProps>) => {
        const [state,setState] = useState(null)
        const update = useCallback((value: any)=>{
            setState(value)
            // onchange
        },[])
        return (
            <StateContext.Provider value={[state, update]}>
                <Component {...props} />
            </StateContext.Provider>
        )
    }

}

export default StateContext;