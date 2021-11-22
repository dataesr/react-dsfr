import * as React from 'react';

export type TitleChildren = string | React.ReactNode;

export type TitleAs = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type TitleLook = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type TitleClassName = string | Object | any[];

export interface TitleProps {
    children: TitleChildren;
    /**
     * html tag to render
     */
    as: TitleAs;
    look?: TitleLook;
    className?: TitleClassName;
}

declare const Title: React.FC<TitleProps>;

export default Title;

