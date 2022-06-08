import "./Content.scoped.css";

import React from "react";

export interface ContentProps {
  children?: React.ReactNode;
}

const Content = (props: ContentProps) => {
  const { children } = props;
  return <div className="content">{children}</div>;
};

export default Content;
