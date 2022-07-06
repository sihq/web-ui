import React, { FunctionComponent } from "react";

interface SuggestionProps {
  suggestion: any;
  onClick: VoidFunction;
  onMouseDown: VoidFunction;
  onMouseEnter: VoidFunction;
  onMouseLeave: VoidFunction;
  onMouseUp: VoidFunction;
  onTouchStart: VoidFunction;
  onTouchEnd: VoidFunction;
}

const Suggestion: FunctionComponent<SuggestionProps> = (props) => {
  const {
    suggestion,
    onClick,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    onMouseUp,
    onTouchStart,
    onTouchEnd,
  } = props;

  return (
    <button
      {...{
        onClick,
        onMouseDown,
        onMouseEnter,
        onMouseLeave,
        onMouseUp,
        onTouchStart,
        onTouchEnd,
      }}
      className={`px-3 p-2 flex-1 flex ${
        suggestion.active ? "bg-sky-50 text-sky-800" : "bg-transparent"
      } outline-none justify-between hover:bg-sky-50 hover:text-sky-800`}
    >
      <span className="flex-1 text-left">
        {suggestion.formattedSuggestion.mainText}
      </span>
      <span
        className="font-semibold uppercase text-right"
        style={{ fontSize: "0.5rem" }}
      >
        {suggestion.formattedSuggestion.secondaryText}
      </span>
    </button>
  );
};

export default Suggestion;
