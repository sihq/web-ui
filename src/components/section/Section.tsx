import React, { useContext } from "react";

import SectionsContext from "../../contexts/SectionsContext";

export interface SectionProps {
  children?: React.ReactNode;
  between: RegExp;
}

const Section = (props: SectionProps) => {
const { children, between } = props
    const [{current}] = useContext(SectionsContext)
    const match = new RegExp(between).test(`${current}`)
    if(!match){
        return null;
    }

  return <>{children}</>;
};

export default Section;
