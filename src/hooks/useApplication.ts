import { ApplicationContext } from "../contexts";
import { useContext } from "react";

export default function useApplication() {
    const context = useContext(ApplicationContext);
    if (context === null) {
      throw new Error("Cannot use useApplication outside of Application.");
    }
    return context;
  };