import "./Steps.scoped.css";

import { Boundary } from "../../utilities";
import React from "react";
import  { useSections } from "../../hooks";

export interface StepsProps {
  children?: React.ReactNode;
}

const Steps = (props: StepsProps) => {
  const { children } = props;

  const { current, sections } = useSections();

  return (
    <>
    <div className="steps">
      <div className="before">
        {[...Array(sections - (sections - current))].map((x, i) =>
            <div className="complete" key={i}></div>
        )}
      </div>
      <div className="current"></div>
      <div className="after">
        {[...Array(sections - current)].map((x, i) =>
            <div className="other" key={i}></div>
        )}
      </div> 
    </div>
    </>
  );
};

export default Boundary(Steps);
