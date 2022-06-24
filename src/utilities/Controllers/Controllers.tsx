import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";

import { ControllersContext } from "../../contexts";
import { useQueue } from "../../hooks";

interface ControllersProps {
  children: React.ReactNode;
}

function isMountRequest(controllers: { [key: string]: any }) {
  return (
    Object.values(controllers).filter(
      ({ current: { isMounted, isMounting } }) => !isMounted && !isMounting
    ).length > 0
  );
}

const Controllers: FunctionComponent<ControllersProps> = (props) => {
  const { children } = props;
  const [controllers, setControllers] = useState<{ [key: string]: any }>({});

  const { addTask, isProcessing, tasks } = useQueue({ shouldProcess: true });

  const mount = useCallback(
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
  

  const dispatch = useCallback(
    (controller: string, method: string, parameters: object) => {
      const { [controller]: $controller } = controllers;

      if (isProcessing) {
        $controller.current.setQueued(() => true);
      }

     
      $controller.current.setScope(() => method);

      addTask({
        references: [controller],
        task: () =>
          new Promise((resolve) => {
            const { [controller]: $controller, ...$controllers } = controllers;

            // set all other controllers to be refreshing.
            Object.values($controllers).map(({ current: { setRefreshing } }) =>
              setRefreshing(() => true)
            );

            $controller.current.setScope(() => method);
            $controller.current.setDispatching(() => true);

            if(tasks.filter(({ references })=>references?.includes(controller)).length < 2){
                $controller.current.setQueued(() => false);
            }
        

            setTimeout(() => {
              // simulate network request
              console.info('network request trigger')
              $controller.current.setDispatching(() => false);
              $controller.current.setScope(() => "");
              // set all other controllers to be now not be refreshing.
              Object.values($controllers).map(
                ({ current: { setRefreshing } }) => setRefreshing(() => false)
              );
              resolve();
            }, 2000);
          }),
      });
    },
    [controllers, tasks, isProcessing]
  );

  useEffect(() => {
    if (isMountRequest(controllers)) {
      addTask({
        references: Object.keys(controllers),
        task: () =>
          new Promise((resolve) => {
            // set all other controllers to be refreshing.
            Object.values(controllers).map(
              ({ current: { setMounted, setRefreshing, setMounting } }) => {
                setMounted((isMounted: boolean) => {
                  if (isMounted) {
                    setRefreshing(() => true);
                  } else {
                    setMounting(() => true);
                  }
                  return isMounted;
                });
              }
            );

            setTimeout(() => {
              // simulate network request
              console.info('network request trigger')
              Object.values(controllers).map(
                ({ current: { setRefreshing, setMounting, setMounted } }) => {
                  setMounting((isMounting: boolean) => {
                    if (isMounting) {
                      setMounted(() => true);
                      return false;
                    }
                    setRefreshing(() => false);
                    return isMounting;
                  });
                }
              );
              resolve();
            }, 2000);
          }),
      });
    }
  }, [controllers]);

  return (
    <ControllersContext.Provider value={{ mount, dispatch }}>
      {children}
    </ControllersContext.Provider>
  );
};

export default Controllers;
