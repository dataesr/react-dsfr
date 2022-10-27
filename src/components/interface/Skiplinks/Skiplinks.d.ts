import * as React from 'react';

export type SkiplinksChildren = React.ReactNode[] | React.ReactNode;

export interface SkiplinksProps {
  children: SkiplinksChildren;
  className?: string;
}

declare const Skiplinks: React.FC<SkiplinksProps>;

export default Skiplinks;
