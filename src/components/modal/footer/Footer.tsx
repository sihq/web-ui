import "./Footer.scoped.css";

import React from "react";

export interface FooterProps {
  children?: React.ReactNode;
}

const Footer = (props: FooterProps) => {
  const { children } = props;
  return (
    <div className="footer">
        {children}
    </div>
  );
};

export default Footer;
