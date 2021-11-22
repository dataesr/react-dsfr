import * as React from 'react';

export type CardDescriptionChildren = string | React.ReactNode;

export type CardDescriptionClassName = string | Object | any[];

export type CardDescriptionAs = "span" | "div" | "p";

export interface CardDescriptionProps {
    __TYPE?: any;
    children: CardDescriptionChildren;
    className?: CardDescriptionClassName;
    as?: CardDescriptionAs;
}

declare const CardDescription: React.FC<CardDescriptionProps>;

export default CardDescription;

