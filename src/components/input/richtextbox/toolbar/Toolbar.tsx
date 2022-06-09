import "./Toolbar.scoped.css";

import React, { useCallback } from "react";

import Button from "../../../button";

export interface TextboxProps {
  editor: any;
}

function execCommandOnElement(el:any, commandName:string, value?:string) {
    if (typeof value == "undefined") {
        value = '';
    }

    if (typeof window.getSelection != "undefined") {
        // Non-IE case
        var sel = window.getSelection();

        // Save the current selection
        var savedRanges = [];
        for (var i = 0, len = sel?.rangeCount??0; i < len; ++i) {
            savedRanges[i] = sel?.getRangeAt(i).cloneRange();
        }

        // Temporarily enable designMode so that
        // document.execCommand() will work
        document.designMode = "on";

        // Select the element's content
        sel = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(el);
        sel?.removeAllRanges();
        sel?.addRange(range);

        // Execute the command
        document.execCommand(commandName, false, value);

        // Disable designMode
        document.designMode = "off";

        // Restore the previous selection
        sel = window.getSelection();
        sel?.removeAllRanges();
        for (var i = 0, len = savedRanges.length; i < len; ++i) {
            sel?.addRange(savedRanges[i]);
        }
    } else if (typeof document.body.createTextRange != "undefined") {
        // IE case
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.execCommand(commandName, false, value);
    }
}


export const Toolbar = (props: TextboxProps) => {
  const { editor } = props;

  const format = useCallback(
    (command: string, parameter?: string) => {

        execCommandOnElement(editor.current,command,parameter)

    //  document.execCommand(
    //     command,
    //     !1,
    //     parameter || null
    //   );
    },
    [editor]
  );

  return (
    <div className="flex items-center space-x-1 text-slate-700 border-t border-slate-200 pt-1">
      <span>
        <Button
          shape="square"
          variant="outlined"
          onClick={() => format("bold")}
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0" fill="none" width="24" height="24" />
            <g>
              <path
                fill="currentColor"
                d="M7 5.01h4.547c2.126 0 3.67.302 4.632.906.96.605 1.44 1.567 1.44 2.887 0 .896-.21 1.63-.63 2.205-.42.574-.98.92-1.678 1.036v.103c.95.212 1.637.608 2.057 1.19.42.58.63 1.35.63 2.315 0 1.367-.494 2.434-1.482 3.2-.99.765-2.332 1.148-4.027 1.148H7V5.01zm3 5.936h2.027c.862 0 1.486-.133 1.872-.4.386-.267.578-.708.578-1.323 0-.574-.21-.986-.63-1.236-.42-.25-1.087-.374-1.996-.374H10v3.333zm0 2.523v3.905h2.253c.876 0 1.52-.167 1.94-.502.416-.335.625-.848.625-1.54 0-1.243-.89-1.864-2.668-1.864H10z"
              />
            </g>
          </svg>
        </Button>
      </span>
      <span>
        <Button
          shape="square"
          variant="outlined"
          onClick={() => format("italic")}
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0" fill="none" width="24" height="24" />
            <g>
              <path
                fill="currentColor"
                d="M10.536 5l-.427 2h1.5L9.262 18h-1.5l-.427 2h6.128l.426-2h-1.5l2.347-11h1.5l.427-2"
              />
            </g>
          </svg>
        </Button>
      </span>
      <span>
        <Button
          shape="square"
          variant="outlined"
          onClick={() => format("insertUnorderedList")}
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0" fill="none" width="24" height="24" />
            <g>
              <path
                fill="currentColor"
                d="M9 19h12v-2H9v2zm0-6h12v-2H9v2zm0-8v2h12V5H9zm-4-.5c-.828 0-1.5.672-1.5 1.5S4.172 7.5 5 7.5 6.5 6.828 6.5 6 5.828 4.5 5 4.5zm0 6c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm0 6c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5z"
              />
            </g>
          </svg>
        </Button>
      </span>
      <span>
        <Button
          shape="square"
          variant="outlined"
          onClick={() => format("insertOrderedList")}
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0" fill="none" width="24" height="24" />
            <g>
              <path
                fill="currentColor"
                d="M8 19h13v-2H8v2zm0-6h13v-2H8v2zm0-8v2h13V5H8zm-4.425.252c.107-.096.197-.188.27-.275-.013.228-.02.48-.02.756V8h1.176V3.717H3.96L2.487 4.915l.6.738.487-.4zm.334 7.764c.474-.426.784-.715.93-.867.145-.153.26-.298.35-.436.087-.138.152-.278.194-.42.042-.143.063-.298.063-.466 0-.225-.06-.427-.18-.608s-.29-.32-.507-.417c-.218-.1-.465-.148-.742-.148-.22 0-.42.022-.596.067s-.34.11-.49.195c-.15.085-.337.226-.558.423l.636.744c.174-.15.33-.264.467-.34.138-.078.274-.117.41-.117.13 0 .232.032.304.097.073.064.11.152.11.264 0 .09-.02.176-.055.258-.036.082-.1.18-.192.294-.092.114-.287.328-.586.64L2.42 13.238V14h3.11v-.955H3.91v-.03zm.53 4.746v-.018c.306-.086.54-.225.702-.414.162-.19.243-.42.243-.685 0-.31-.126-.55-.378-.727-.252-.176-.6-.264-1.043-.264-.307 0-.58.033-.816.1s-.47.178-.696.334l.48.773c.293-.183.576-.274.85-.274.147 0 .263.027.35.082s.13.14.13.252c0 .3-.294.45-.882.45h-.27v.87h.264c.217 0 .393.017.527.05.136.03.233.08.294.143.06.064.09.154.09.27 0 .153-.057.265-.173.337-.115.07-.3.106-.554.106-.164 0-.343-.022-.538-.07-.194-.044-.385-.115-.573-.21v.96c.228.088.44.148.637.182.196.033.41.05.64.05.56 0 .998-.114 1.314-.343.315-.228.473-.542.473-.94.002-.585-.356-.923-1.07-1.013z"
              />
            </g>
          </svg>
        </Button>
      </span>
      <span>
        <Button
          shape="square"
          variant="outlined"
          onClick={() => format("insertOrderedList")}
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0" fill="none" width="24" height="24" />
            <g>
              <path
                fill="currentColor"
                d="M17 13H7v-2h10v2zm1-6h-1c-1.63 0-3.065.792-3.977 2H18c1.103 0 2 .897 2 2v2c0 1.103-.897 2-2 2h-4.977c.913 1.208 2.347 2 3.977 2h1c2.21 0 4-1.79 4-4v-2c0-2.21-1.79-4-4-4zM2 11v2c0 2.21 1.79 4 4 4h1c1.63 0 3.065-.792 3.977-2H6c-1.103 0-2-.897-2-2v-2c0-1.103.897-2 2-2h4.977C10.065 7.792 8.63 7 7 7H6c-2.21 0-4 1.79-4 4z"
              />
            </g>
          </svg>
        </Button>
      </span>
    </div>
  );
};

export default Toolbar;
