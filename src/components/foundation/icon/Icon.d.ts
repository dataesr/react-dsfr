import * as React from 'react';

export type IconSize = "fw" | "xxs" | "xs" | "sm" | "1x" | "lg" | "xl" | "2x" | "3x" | "10x";

export type IconVerticalAlign = "middle" | "sub" | "top";

export type IconIconPosition = "left" | "right" | "center";

export type IconAs = "span" | "i" | "div" | "p";

export type IconChildren = React.ReactElement<any>[] | React.ReactElement<any> | string;

export interface IconProps {
    size?: IconSize;
    name: string;
    verticalAlign?: IconVerticalAlign;
    className?: string;
    iconPosition?: IconIconPosition;
    as?: IconAs;
    children?: IconChildren;
    title?: string;
    color?: string;
}

declare const Icon: React.FC<IconProps>;

export default Icon;

