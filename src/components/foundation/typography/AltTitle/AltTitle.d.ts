import * as React from 'react';

export type AltTitleChildren = string | React.ReactNode;

export type AltTitleClassName = string | Object | any[];

export type AltTitleAs = "h1" | "h2" | "h3" | "h4";

export type AltTitleSize = "xl" | "lg" | "md" | "sm" | "xs";

export interface AltTitleProps {
    children: AltTitleChildren;
    className?: AltTitleClassName;
    /**
     * html tag to render
     */
    spacing?: string;
    as: AltTitleAs;
    size: AltTitleSize;
}

declare const AltTitle: React.FC<AltTitleProps>;

export default AltTitle;

