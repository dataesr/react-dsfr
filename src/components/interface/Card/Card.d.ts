import * as React from 'react';

export type CardChildren = React.ReactNode[] | React.ReactNode;

export type CardAnchorAs = "a" | any;

export type CardClassName = string | Object | any[];

export interface CardProps {
    children: CardChildren;
    anchorAs?: CardAnchorAs;
    href?: string;
    ariaLabel?: string;
    isHorizontal?: boolean;
    className?: CardClassName;
    bodyClassName?: string;
    hasArrow?: boolean;
    enlargeLink?: boolean;
    asLink?: React.ReactElement<any>;
    onClick?: (...args: any[])=>any;
}

declare const Card: React.FC<CardProps>;

export default Card;

