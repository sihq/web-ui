import { ComponentContext } from "../contexts";
import { useContext } from "react";

export default function useComponent() {
    const context = useContext(ComponentContext);
    if (context === null) {
      throw new Error("Cannot use useComponent outside of Component.");
    }
    return context;
  };