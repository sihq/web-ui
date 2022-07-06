import React from "react";
import { withComponent } from "../../hocs";

export interface ComponentProps {
  children?: React.ReactNode;
}

const Component = (props: ComponentProps) => {
  const { children} = props;
  return <>{children}</>
};
export default withComponent(Component);
