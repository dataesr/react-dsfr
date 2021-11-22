import * as React from 'react';

export type ContainerChildren = React.ReactNode[] | React.ReactNode | string;

export type ContainerClassName = string | Object | any[];

export interface ContainerProps {
    /**
     * Container children node (should be Rows)
     */
    children?: ContainerChildren;
    /**
     * Container with no outer margins
     */
    fluid?: boolean;
    spacing?: string;
    role?: string;
    className?: ContainerClassName;
}

declare const Container: React.FC<ContainerProps>;

export default Container;

