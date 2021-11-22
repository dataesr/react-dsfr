import * as React from 'react';

export type ColChildren = React.ReactNode[] | React.ReactNode | string;

export type ColClassName = string | Object | any[];

export interface ColProps {
    children?: ColChildren;
    spacing?: string;
    /**
     * Col size
     */
    n?: string;
    /**
     * Set Col offset.
     */
    offset?: string;
    className?: ColClassName;
}

declare const Col: React.FC<ColProps>;

export default Col;

