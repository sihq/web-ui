import React, { FunctionComponent, useRef } from "react";

import { PlusIcon } from "@heroicons/react/solid";
import { useComponent } from "../../../../hooks";

export interface IncrementProps {}

const Increment: FunctionComponent<IncrementProps> = () => {
  const timer = useRef<NodeJS.Timer>();
  const delay = useRef<NodeJS.Timer>();

  const { setValue, props } = useComponent();
  const { max, multiplier = 1, decimals = 0 } = props;

  const increment = () =>
    setValue((prev: number) => {
      if (max === undefined || prev < max) {
        return (Number(prev) + multiplier).toFixed(decimals);
      }
      return prev;
    });

  const onHold = () =>
    (delay.current = setTimeout(() => {
      timer.current = setInterval(increment, 100);
    }, 400));

  const clear = () => {
    clearInterval(timer.current);
    clearTimeout(delay.current);
  };

  return (
    <button
      data-action="increment"
      onMouseLeave={clear}
      onMouseUp={clear}
      onMouseDown={onHold}
      onClick={increment}
      style={{     outlineOffset: '-4px'}}
      className="h-full focus-visible:outline-1 focus-visible:outline-gray-400 focus-visible:outline-dashed active:bg-slate-300 flex items-center justify-center text-slate-500 bg-slate-100 border-l border-slate-300 hover:text-slate-700 hover:bg-slate-200 w-10  cursor-pointer outline-none"
  >
      <PlusIcon className="h-4 w-4" />
    </button>
  );
};

export default Increment;
