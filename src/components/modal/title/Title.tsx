import "./Title.scoped.css";

import React from "react";

export interface TitleProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  hero?: boolean;
}

const Title = (props: TitleProps) => {
  const { title, description, icon, hero } = props;
  return (
    <div className={`masthead ${hero ? 'big' : 'default'}`}>
      <span className="title">
        {icon ? <span className="icon">{icon}</span> : null}
        <span className="caption">
          <span>{title}</span>
          {description ? (
            <span className="description">{description}</span>
          ) : null}
        </span>
      </span>
    </div>
  );
};

export default Title;
