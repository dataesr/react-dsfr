import * as React from 'react';

export type RowChildren = React.ReactNode[] | React.ReactNode | string;

export type RowAlignItems = "top" | "middle" | "bottom";

export type RowJustifyContent = "right" | "center" | "left";

export type RowClassName = string | Object | any[];

export interface RowProps {
    /**
     * Row children (should always be Col)
     */
    children?: RowChildren;
    /**
     * Add gutters to row
     */
    gutters?: boolean;
    spacing?: string;
    /**
     * Vertical alignment of children
     */
    alignItems?: RowAlignItems;
    /**
     * Horizontal alignement.
     */
    justifyContent?: RowJustifyContent;
    className?: RowClassName;
}

declare const Row: React.FC<RowProps>;

export default Row;

