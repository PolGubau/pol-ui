import React, { type ErrorInfo, type PropsWithChildren, type ReactNode } from "react";
import { TbReload } from "react-icons/tb";

import { IconButton } from "../IconButton";

interface ErrorBoundaryProps
  extends PropsWithChildren<{
    fallbackUI: ReactNode;
    onError?: (error: Error, errorInfo: ErrorInfo) => void;
    retry?: () => void;
    reloadText?: string;
  }> {}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    const { onError } = this.props;
    if (onError) {
      onError(error, errorInfo);
    }
  }

  handleRetry = (): void => {
    const { retry } = this.props;
    if (retry) {
      retry();
      this.setState({ hasError: false });
    }
  };

  override render(): React.ReactNode {
    const { fallbackUI, children, reloadText = "Reload" } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <div className="flex items-center gap-2">
          {fallbackUI}
          {this.props.retry && (
            <IconButton label={reloadText} onClick={this.handleRetry}>
              <TbReload />
            </IconButton>
          )}
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
