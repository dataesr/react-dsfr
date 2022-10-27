import * as React from 'react';

export type SkiplinkItemChildren = string | React.ReactNode;

export interface SkiplinkItemProps {
  children: SkiplinkItemChildren;
  href?: string;
  className?: string;
  target?: string;
  asLink?: React.ReactElement<any>;
}

declare const SkiplinkItem: React.FC<SkiplinkItemProps>;

export default SkiplinkItem;
