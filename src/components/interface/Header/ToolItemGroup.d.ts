import * as React from 'react';

export type ToolItemGroupChildren = React.ReactNode[] | React.ReactNode | string;

export type ToolItemGroupClassName = string | Object | any[];

export interface ToolItemGroupProps {
    __TYPE?: any;
    children: ToolItemGroupChildren;
    className?: ToolItemGroupClassName;
}

declare const ToolItemGroup: React.FC<ToolItemGroupProps>;

export default ToolItemGroup;

