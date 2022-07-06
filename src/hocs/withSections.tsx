import React, { useCallback, useState } from "react";

import { SectionsContext } from "../contexts";

export interface WithSectionsProps {
    sections: number;
  }

export default function withSections<T extends object>(Component: React.ComponentType<T>) {
    return (props: T & WithSectionsProps) => {
      const { sections = 0, ...native } = props;
   
      const [current, setSections] = useState(0);
  
      const goto = useCallback((section:number) => {
        return new Promise<void>((complete)=>{
          setSections(section)
          complete();
        })
      }, [sections,current]);
  
      const next = useCallback(() => {
        return new Promise<void>((complete)=>{
          setSections(current < sections ? current + 1 : sections)
          complete();
        })
      }, [sections,current]);
      const prev = useCallback(() => {
        return new Promise<void>((complete)=>{
          setSections(sections>0 ? sections - 1 : 0)
          complete();
        })
      }, [sections,current]);
  
      return (
        <SectionsContext.Provider
          value={{
            sections,
            current,
            goto,
            next,
            prev
          }}
        >
          <Component {...(native as T)} />
        </SectionsContext.Provider>
      );
    };
  }