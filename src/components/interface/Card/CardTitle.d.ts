import * as React from 'react';

export type CardTitleAnchorAs = "a" | any;

export type CardTitleChildren = string | React.ReactNode;

export type CardTitleClassName = string | Object | any[];

export type CardTitleAs = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface CardTitleProps {
    /**
     * @ignore
     */
    href?: string;
    /**
     * @ignore
     */
    __TYPE?: any;
    anchorAs?: CardTitleAnchorAs;
    children: CardTitleChildren;
    className?: CardTitleClassName;
    as?: CardTitleAs;
    asLink?: React.ReactElement<any>;
    onClick?: (...args: any[])=>any;
    ariaLabel?: string;
}

declare const CardTitle: React.FC<CardTitleProps>;

export default CardTitle;

