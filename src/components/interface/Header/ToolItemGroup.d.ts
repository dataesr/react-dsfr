import * as React from 'react';

export type ToolItemGroupChildren = React.ReactNode[] | React.ReactNode | string;

export interface ToolItemGroupProps {
  __TYPE?: any;
  children: ToolItemGroupChildren;
  className?: string;
}

declare const ToolItemGroup: React.FC<ToolItemGroupProps>;

export default ToolItemGroup;
