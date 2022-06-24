import React, { FunctionComponent, useRef } from "react";

import { MinusIcon } from "@heroicons/react/solid";
import { useComponent } from "../../../../hooks";

interface DecrementProps {}

const Decrement: FunctionComponent<DecrementProps> = () => {
  const timer = useRef<NodeJS.Timer>();
  const delay = useRef<NodeJS.Timer>();

  const { setValue, props } = useComponent();
  const { min, multiplier = 1, decimals = 0 } = props;

  const decrement = () =>
    setValue((prev: number) => {
      if (min === undefined || prev > min) {
        return (Number(prev) - multiplier).toFixed(decimals);
      }
      return prev;
    });

  const onHold = () =>
    (delay.current = setTimeout(() => {
      timer.current = setInterval(decrement, 100);
    }, 400));

  const clear = () => {
    clearInterval(timer.current);
    clearTimeout(delay.current);
  };
  return (
    <button
      data-action="decrement"
      onMouseLeave={clear}
      onMouseUp={clear}
      onMouseDown={onHold}
      onClick={decrement}
      style={{     outlineOffset: '-4px'}}
      className="h-full focus-visible:outline-1 focus-visible:outline-gray-400 focus-visible:outline-dashed active:bg-slate-300 flex items-center justify-center text-slate-500 bg-slate-100 border-r border-slate-300 hover:text-slate-700 hover:bg-slate-200 w-10  cursor-pointer outline-none"
    >
      <MinusIcon className="h-4 w-4" />
    </button>
  );
};

export default Decrement;
