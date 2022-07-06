import { ControllerContext } from "../contexts";
import { useContext } from "react";

export default function useController() {
    const context = useContext(ControllerContext);
    if (context === null) {
      throw new Error("Cannot use useController outside of Controller.");
    }
    return context;
  };