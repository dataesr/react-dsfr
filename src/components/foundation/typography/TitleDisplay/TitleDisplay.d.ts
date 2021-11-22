import * as React from 'react';

export type TitleDisplayChildren = string | React.ReactNode;

export type TitleDisplayClassName = string | Object | any[];

export type TitleDisplayAs = "h1" | "h2" | "h3" | "h4";

export type TitleDisplaySize = "xl" | "lg" | "md" | "sm" | "xs";

export interface TitleDisplayProps {
    children: TitleDisplayChildren;
    className?: TitleDisplayClassName;
    /**
     * html tag to render
     */
    as?: TitleDisplayAs;
    size: TitleDisplaySize;
}

declare const TitleDisplay: React.FC<TitleDisplayProps>;

export default TitleDisplay;

