import * as React from 'react';

export type LinkClassName = string | Object | any[];

export type LinkChildren = React.ReactNode[] | React.ReactNode | string;

export type LinkVerticalIconPosition = "top" | "middle";

export type LinkIconPosition = "left" | "right";

export type LinkIconSize = "fw" | "xxs" | "xs" | "sm" | "1x" | "lg" | "lg" | "xl" | "2x" | "3x" | "10x";

export type LinkDisplay = "inline" | "flex";

export interface LinkProps {
    className?: LinkClassName;
    children?: LinkChildren;
    href?: string;
    verticalIconPosition?: LinkVerticalIconPosition;
    as?: React.ReactElement<any>;
    title?: string;
    target?: string;
    isSimple?: boolean;
    current?: boolean;
    icon?: string;
    onClick?: (...args: any[])=>any;
    iconPosition?: LinkIconPosition;
    iconSize?: LinkIconSize;
    /**
     * @ignore
     */
    display?: LinkDisplay;
}

declare const Link: React.FC<LinkProps>;

export default Link;

