import "./Steps.scoped.css";

import React, { useContext, useState } from "react";

import SectionsContext from "../../contexts/SectionsContext";

export interface StepsProps {
  children?: React.ReactNode;
}

const Steps = (props: StepsProps) => {
  const { children } = props;


  const [{current = 0, sections = 0}] = useContext(SectionsContext)
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

export default Steps;
