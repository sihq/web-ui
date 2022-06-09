import React, { createContext, useCallback, useState } from "react";

export const SectionsContext = createContext([
  { sections: 0, current: 0 },
  { increment: () => {}, decrement: () => {} },
]);

export interface WithSectionsProps {
  sections: number;
}

export function withSections<T extends WithSectionsProps, C>(
  Component: React.ComponentType<C>
) {
  return (props: Omit<T, keyof C>) => {
    const { sections, ...otherProps } = props as T;
 
    const [qty, setSections] = useState(0);
    const total = sections ?? 0;

    const increment = useCallback(() => setSections(qty < total ? qty + 1 : total), [qty]);
    const decrement = useCallback(() => setSections(qty>0 ? qty - 1 : 0), [qty]);

    return (
      <SectionsContext.Provider
        value={[
          { sections: total, current: qty },
          { increment, decrement },
        ]}
      >
        <Component {...otherProps as T} />
      </SectionsContext.Provider>
    );
  };
}

export default SectionsContext;
