import "./Header.scoped.css";

import Button from "../../button";
import React from "react";
import { XIcon } from "@heroicons/react/outline";

export interface HeaderProps {
  children?: React.ReactNode;
  closeable?: boolean;
}

const Header = (props: HeaderProps) => {
  const { children, closeable } = props;
  return (
    <div className="header">
      {children}
    </div>
  );
};

export default Header;
