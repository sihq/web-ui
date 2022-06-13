import { createContext } from "react";

export interface SectionsContextProps {
  sections: number;
  current: number;
  goto: (section: number) => Promise<void>;
  next: () => Promise<void>;
  prev: () => Promise<void>;
}

export default createContext<SectionsContextProps | null>(null);