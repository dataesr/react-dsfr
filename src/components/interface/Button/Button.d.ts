import * as React from 'react';

export type ButtonIconPosition = "left" | "right";

export type ButtonClassName = string | Object | any[];

export type ButtonSize = "sm" | "md" | "lg";

export type ButtonChildren = string | React.ReactNode;

export interface ButtonProps {
    secondary?: boolean;
    icon?: string;
    disabled?: boolean;
    onClick?: (...args: any[])=>any;
    iconPosition?: ButtonIconPosition;
    title?: string;
    styleAsLink?: boolean;
    className?: ButtonClassName;
    size?: ButtonSize;
    children?: ButtonChildren;
    submit?: boolean;
    /**
     * color[0] is background, color[1] is color
     */
    colors?: string[];
}

declare const Button: React.FC<ButtonProps>;

export default Button;

