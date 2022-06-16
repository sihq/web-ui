import React, { FunctionComponent } from "react";

import { Portal } from "../../../../utilities";
import Suggestion from "./Suggestion";
import { useComponent } from "../../../../hooks";

interface SuggestionsProps {
    suggestions:any;
    getSuggestionItemProps: any;
}
 
const Suggestions: FunctionComponent<SuggestionsProps> = (props) => {
    const {suggestions, getSuggestionItemProps } = props

    const { setManualAddress } = useComponent();

    if(suggestions.length < 1){
        return <></>;
    }

    return (
    
        <div
        style={{ minWidth: 410 }}
        className="absolute transform translate-y-1 z-20 top-full left-0 right-0 rounded bg-white border border-slate-400 shadow-lg overflow-hidden divide-y divide-slate-200 text-xs flex text-slate-600 flex-col"
      >
        {suggestions.map((suggestion:any) => {
          const { onClick, onMouseDown, onMouseEnter, onMouseLeave, onMouseUp, onTouchStart, onTouchEnd } = getSuggestionItemProps(suggestion);
          return (
            <Suggestion suggestion={suggestion} {...{onClick, onMouseDown, onMouseEnter, onMouseLeave, onMouseUp, onTouchStart, onTouchEnd}} />
          );
        })}
  
        <div className="text-slate-400 text-xs px-3 p-1 flex items-center space-x-1 select-none">
          <span>
            Continue typing to find better matches or
            <button
              onClick={() => setManualAddress(true)}
              className="underline font-semibold outline-none bg-transparent border-none hover:text-slate-800"
            >
              Enter address manually
            </button>
          </span>
        </div>
      </div>

    );
}
 
export default Suggestions;