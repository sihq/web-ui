import React, { FunctionComponent, useEffect, useState } from "react";

import Controller from "../src/utilities/Controller/Controller";
import Controllers from "../src/utilities/Controllers/Controllers";
import { useController } from "../src/hooks";

interface ControlledProps {}

interface AppShellProps {
  children: React.ReactNode;
}

const AppShell = (props: AppShellProps) => {
  const [removed, remove] = useState(true);
  const [delayed,setDelayed] = useState(false)
  useEffect(()=>{
    setTimeout(()=>{ setDelayed(true) },1000)
  },[])
  return (
    <Controllers>
      <button onClick={() => remove(!removed)}>toggle</button>

      <div className="flex flex-wrap">
        <Controlled />
        <Controlled />
        {removed ? <Controlled /> : null}
        {delayed ? <Controlled /> : null}
      </div>
 
    </Controllers>
  );
};

const Controlled: FunctionComponent<ControlledProps> = () => {
  return (
    <Controller>
      <InnerComponent />
    </Controller>
  );
};

const InnerComponent = () => {
  const { dispatch, isRefreshing, isMounting, isDispatching, isMounted, isQueued, scope } = useController();
  return (
    <div className="p-2 m-2 border border-slate-500 w-52">
      <div className="text-center pb-2 space-y-1 flex flex-col">
        <span>Controller</span>
        {isMounted ? <div className="p-1 px-3 rounded-full bg-green-200 border-green-300 text-green-500 text-xs uppercase">mounted</div> : <div className="p-1 px-3 rounded-full bg-slate-200 border-slate-300 text-slate-500 text-xs uppercase">unmounted</div>}
      </div>
      <div className="p-3 -mx-2 border-y border-slate-400 flex flex-col space-y-2">
        {/* True when this controller is mounting */}
        {isMounting ? <div className="text-green-500">Mounting: <span className="font-bold">true</span></div> : <div className="text-slate-500">Mounting: <span className="font-bold">false</span></div>}
        
        {/* True when this controller is dispatching a update */}
        {isDispatching ? <div className="text-green-500">Dispatching: <span className="font-bold">true</span></div> : <div className="text-slate-500">Dispatching: <span className="font-bold">false</span></div>}
        
        {/* When another conroller is dispatching or mounting, and this controller is receiving a refresh  */}
        {isRefreshing ? <div className="text-green-500">Refreshing: <span className="font-bold">true</span></div> : <div className="text-slate-500">Refreshing: <span className="font-bold">false</span></div>}

        {/* When a mount or dispatch function is placed in the queue to await a request already in progress  */}
        {isQueued ? <div className="text-green-500">Queued: <span className="font-bold">true</span></div> : <div className="text-slate-500">Queued: <span className="font-bold">false</span></div>}
      </div>

      <div className="flex flex-col space-y-2 pt-2">
        <button className="bg-slate-200 p-1" onClick={() => dispatch("save", {})}>{scope === 'save' ? 'dispatching...' : 'dispatch'}</button>
        <button className="bg-slate-200 p-1" onClick={() => dispatch("cancel", {})}>{scope === 'cancel' ? 'cancelling...' : 'cancel'}</button>
      </div>

    </div>
  );
};

export default AppShell;
