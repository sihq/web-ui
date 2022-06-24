import { ControllersContext } from "../contexts";
import { useContext } from "react";

export default function useControllers() {
    const context = useContext(ControllersContext);
    if (context === null) {
      throw new Error("Cannot use useControllers outside of Controllers.");
    }
    return context;
  };