import { useCallback, useState } from "react";

interface UseControllersProps {}

export type Controllers = {
  [key: string]: Controller
}

export type Controller = {
  
}

const useControllers: Function = () => {
    const [controllers, setControllers] = useState<Controllers>({});
    const register = useCallback(
        (uuid: string, controller: any) => {
          setControllers((currentValue) => {
            return { ...currentValue, [uuid]: controller };
          });
          return () => {
            setControllers((currentValue) => {
              const copy = { ...currentValue };
              delete copy[uuid];
              return copy;
            });
          };
        },
        [controllers]
      );

      return [controllers, register];
}
 
export default useControllers;



