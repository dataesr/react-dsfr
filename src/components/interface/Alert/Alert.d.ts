import * as React from 'react';

export type AlertAs = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type AlertTitle = string | Object | any[];

export type AlertDescription = string | Object | any[];

export type AlertType = 'error' | 'success' | 'info' | 'warning';

export interface AlertProps {
  as?: AlertAs;
  className?: string;
  closable?: boolean;
  description?: AlertDescription;
  onClose?: (...args: any[])=>any;
  role?: string;
  show?: boolean;
  small?: boolean;
  title?: AlertTitle;
  type?: AlertType;
}

declare const Alert: React.FC<AlertProps>;

export default Alert;
