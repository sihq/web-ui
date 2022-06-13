import { PinInput, PinWrapper } from "./Pin.style";
import PropertiesContext, {
  withProperties,
} from "../../../contexts/PropertiesContext";
import React, { SyntheticEvent, useContext, useState } from "react";

import MultiRef from "react-multi-ref";
import { useonChange } from "../../../hooks/useonChange";

export interface PinProps {
  autofocus?: boolean;
  size?: number;
  alphanumeric?:boolean;
  mask?:boolean;
}

export const Pin = withProperties((props: PinProps) => {
  const { mask = true, size = 4, alphanumeric = false, autofocus } = props;

  const onChange = useonChange();

  const placeholder = "○";

  const refs = new MultiRef();

  const [value, setValue] = useState([...Array(size)].map(() => ""));
  const [hasFocus, setFocus] = useState(false);

  const getMaskStyle = (i: number) => {
    if (value[i] !== "" && mask) {
      return "●";
    } else {
      return value[i];
    }
  };

  const validateInput = (input:string) => {
    if (!alphanumeric) {
      if (input.match(/^[0-9]+$/)) {
        return true;
      }
      return false;
    }
    return true;
  };

  return (
    <PinWrapper>
      {[...Array(value.length)].map((x, i) => (
        <PinInput
          data-autofocus={autofocus}
          key={i}
          inputRef={refs.ref(i)}
          onBlur={() => setFocus(false)}
          onFocus={() => setFocus(true)}
          onChange={(event:SyntheticEvent) => {
            const eventValue = event.target.value;
            // in the case of an autocomplete or copy and paste
            if (eventValue.length > 2) {
              // see if we can use the string to fill out our values
              if (
                eventValue.length === value.length &&
                validateInput(eventValue)
              ) {
                setValue(eventValue.split(""));
              }
              return;
            }
            // digit was deleted
            if (eventValue === "") {
              const newValues = value.slice();
              newValues[i] = "";
              setValue(newValues);

              return;
            }
            // we want to override the input value with the last digit typed
            const currentValue = value[i];
            let newValue = eventValue;
            if (currentValue[0] === eventValue[0]) {
              newValue = eventValue[1];
            } else if (currentValue[0] === eventValue[1]) {
              newValue = eventValue[0];
            }
            // only fire a change event if the new value is a digit
            if (validateInput(newValue)) {
              const newValues = value.slice();
              newValues[i] = newValue;
              setValue(newValues);

              // tab to next pin code input if we aren't at end already
              if (i < value.length - 1) {
                const inputRef = refs.map.get(i + 1);
                if (inputRef && inputRef.focus) inputRef.focus();
              }
            }
          }}
          onKeyDown={(event: SyntheticEvent) => {
            // if we see a backspace/delete and the input is empty, transfer focus backward
            if (event.key === "Backspace" && value[i] === "" && i > 0) {
              const inputRef = refs.map.get(i - 1);
              if (inputRef && inputRef.focus) inputRef.focus();
            }
          }}
          pattern="\d*"
          placeholder={hasFocus ? "" : placeholder}
          value={getMaskStyle(i)}
        />
      ))}
    </PinWrapper>
  );
});

export default Pin;
