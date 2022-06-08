import React, { createContext } from "react";

export const PropertiesContext = createContext({});

export interface WithPropertiesProps{}

export function withProperties<T extends WithPropertiesProps = WithPropertiesProps>(Component: React.ComponentType<T>){
    return (props: Omit<T, keyof WithPropertiesProps>) => {
        return (
            <PropertiesContext.Provider value={props}>
                <Component {...props} />
            </PropertiesContext.Provider>
        )
    }

}

export default PropertiesContext;