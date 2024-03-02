import {ErrorInfo, ReactNode} from 'react';

export interface ErrorBoundaryState {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export interface ErrorBoundaryProps {
  children?: ReactNode;
}
