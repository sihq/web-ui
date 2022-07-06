import { FormContext } from "../contexts";
import { useContext } from "react";

export default function useForm() {
    const context = useContext(FormContext);
    if (context === null) {
      throw new Error("Cannot use useForm outside of Form.");
    }
    return context;
  };
  