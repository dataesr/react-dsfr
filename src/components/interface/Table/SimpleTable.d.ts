import * as React from 'react';

export type SimpleTableCaptionPosition = "top" | "bottom" | "none";

export type SimpleTableClassName = string | Object | any[];

export interface SimpleTableProps {
    fixedLayout?: boolean;
    noScroll?: boolean;
    bordered?: boolean;
    captionPosition?: SimpleTableCaptionPosition;
    caption: string;
    className?: SimpleTableClassName;
    data: Object[];
}

declare const SimpleTable: React.FC<SimpleTableProps>;

export default SimpleTable;

