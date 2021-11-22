import * as React from 'react';

export type TileBodyTitleAs = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type TileBodyChildren = React.ReactNode[] | React.ReactNode | string;

export type TileBodyClassName = string | Object | any[];

export interface TileBodyProps {
    /**
     * Html tag to render in accordion title.
     */
    titleAs?: TileBodyTitleAs;
    title: string;
    description?: string;
    linkTarget?: string;
    linkTitle?: string;
    linkHref?: string;
    children?: TileBodyChildren;
    className?: TileBodyClassName;
    asLink?: React.ReactElement<any>;
}

declare const TileBody: React.FC<TileBodyProps>;

export default TileBody;

