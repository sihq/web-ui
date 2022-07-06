import { ModalContext } from "../contexts";
import { useContext } from "react";

export default function useModal(){
    const context = useContext(ModalContext);
    if (context === null) {
      throw new Error("Cannot use useModal outside of Modal.");
    }
    return context;
  };