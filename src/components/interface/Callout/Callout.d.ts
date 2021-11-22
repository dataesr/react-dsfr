import * as React from 'react';

export type CalloutChildren = React.ReactNode[] | React.ReactNode;

export type CalloutClassName = string | Object | any[];

export interface CalloutProps {
    hasInfoIcon?: boolean;
    /**
     * first color is color of the border, second is background
     * be careful with contrast
     */
    colors?: string[];
    children: CalloutChildren;
    className?: CalloutClassName;
}

declare const Callout: React.FC<CalloutProps>;

export default Callout;

