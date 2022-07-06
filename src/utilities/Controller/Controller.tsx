import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";

import { ControllerContext } from "../../contexts";
import { useControllers } from "../../hooks";
import { v4 as uuidv4 } from "uuid";

interface ControllerProps {
  children: React.ReactNode;
}

const Controller: FunctionComponent<ControllerProps> = (props) => {
  const { children } = props;
  const uuid = useMemo(() => uuidv4(), []);

    //   Loading states
    const [isRefreshing, setRefreshing] = useState(false);
    const [isDispatching, setDispatching] = useState(false);
    const [isMounting, setMounting] = useState(false);
    const [isQueued, setQueued] = useState(false);
    const [isMounted, setMounted] = useState(false);
    const [scope, setScope] = useState('');

    const controllers = useControllers();
  
    const dispatch = useCallback(
        (method: string, parameters: object) => controllers.dispatch(uuid, method, parameters),
        [controllers]
    );


 // isMounted
 const smartRef = useRef({
    controller: '',
    isMounted,
    isMounting,
    scope,
    setRefreshing,
    setDispatching,
    setMounting,
    setMounted,
    setScope,
    setQueued,
    dispatch
  });


  useEffect(() => {
    smartRef.current.controller = '';
    smartRef.current.isMounting = isMounting;
    smartRef.current.isMounted = isMounted;
    smartRef.current.scope = scope;
    smartRef.current.setRefreshing = setRefreshing;
    smartRef.current.setDispatching = setDispatching;
    smartRef.current.setMounting = setMounting;
    smartRef.current.setMounted = setMounted;
    smartRef.current.setQueued = setQueued;
    smartRef.current.setScope = setScope;
  }, [isMounted,isDispatching,isMounting,isRefreshing,isQueued]);



  // mount once.
  useEffect(() => controllers.mount(uuid, smartRef), []);
  

  return (
    <ControllerContext.Provider
      value={{
        controller: "",
        isMounted,
        isDispatching,
        isMounting,
        isRefreshing,
        isQueued,
        scope,
        dispatch
      }}
    >
      {children}
    </ControllerContext.Provider>
  );
};

export default Controller;
