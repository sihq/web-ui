import React, { Component } from "react";

import { CodeIcon } from "@heroicons/react/outline";
import { Warning } from "./Boundary.style";

export interface BoundaryProps {
  children: React.ReactNode;
}
export interface BoundaryState {
  hasError: boolean;
  error: string | null;
}

class Boundary extends Component<BoundaryProps, BoundaryState> {
  constructor(props: BoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error: error.message };
  }

  componentDidCatch(error: Error) {
    // log the error to an error reporting service
  }

  render() {
    const { children } = this.props;
    const { error, hasError } = this.state;
    if (hasError) {
      return (
        <Warning>
          <CodeIcon style={{ height: 20, width: 20, flexShrink: '0' }} />
          <span>{error}</span>
        </Warning>
      );
    }

    return children;
  }
}

export default function withBoundary<T>(Component: React.ComponentType<T>) {
  return (props: T) => {
    return (
      <Boundary>
        <Component {...props} />
      </Boundary>
    );
  };
}
