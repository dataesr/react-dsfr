import * as React from 'react';

export type AlertAs = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type AlertTitle = string | Object | any[];

export type AlertDescription = string | Object | any[];

export type AlertType = "error" | "success" | "info";

export type AlertClassName = string | Object | any[];

export interface AlertProps {
    as?: AlertAs;
    title: AlertTitle;
    description?: AlertDescription;
    type?: AlertType;
    small?: boolean;
    show?: boolean;
    closable?: boolean;
    onClose?: (...args: any[])=>any;
    className?: AlertClassName;
}

declare const Alert: React.FC<AlertProps>;

export default Alert;

