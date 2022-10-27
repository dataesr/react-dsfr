import * as React from 'react';

export type ToolItemAs = 'p' | 'span' | 'div' | '';

export type ToolItemChildren = string | React.ReactNode;

export interface ToolItemProps {
  __TYPE?: any;
  className?: string;
  icon?: string;
  /**
     * html tag to render
     */
  as?: ToolItemAs;
  children: ToolItemChildren;
  link?: string;
  onClick?: (...args: any[])=>any;
  asLink?: React.ReactElement<any>;
  target?: string;
}

declare const ToolItem: React.FC<ToolItemProps>;

export default ToolItem;
