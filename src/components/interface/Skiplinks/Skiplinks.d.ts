import * as React from 'react';

export type SkiplinksChildren = React.ReactNode[] | React.ReactNode;

export type SkiplinksClassName = string | Object | any[];

export interface SkiplinksProps {
    children: SkiplinksChildren;
    className?: SkiplinksClassName;
}

declare const Skiplinks: React.FC<SkiplinksProps>;

export default Skiplinks;

