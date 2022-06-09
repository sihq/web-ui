import ReactDOM from "react-dom";

export interface PortalProps {
  children: React.ReactNode;
  node?: any
}

const Portal = (props: PortalProps) => {
  const { children, node = document.body } = props;
  return ReactDOM.createPortal(children, node);
};

export default Portal;
