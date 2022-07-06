import { Boundary } from "../../utilities";
import React from "react";
import { useSections } from "../../hooks";

export interface SectionProps {
  children?: React.ReactNode;
  between: RegExp;
}

const Section = (props: SectionProps) => {
  const { children, between } = props;

  const { current } = useSections();

  const match = new RegExp(between).test(`${current}`);
  if (!match) {
    return null;
  }

  return <>{children}</>;
};

export default Boundary(Section);
