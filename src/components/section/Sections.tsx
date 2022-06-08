import React from "react";
import { withSections } from "../../contexts/SectionsContext";

export interface SectionsProps {
  children?: React.ReactNode;
}

const Sections = (props: SectionsProps) => {
  const { children } = props
  return <>{children}</>;
}
 

export default withSections(Sections);
