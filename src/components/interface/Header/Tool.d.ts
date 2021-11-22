import * as React from 'react';

export type ToolChildren = React.ReactNode[] | React.ReactNode | string;

export type ToolClassName = string | Object | any[];

export interface ToolProps {
    children: ToolChildren;
    className?: ToolClassName;
    closeButtonLabel?: string;
}

declare const Tool: React.FC<ToolProps>;

export default Tool;

