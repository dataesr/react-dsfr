import * as React from 'react';

export type HeaderNavClassName = string | Object | any[];

export type HeaderNavChildren = React.ReactNode[] | React.ReactNode;

export interface HeaderNavProps {
    __TYPE?: any;
    closeButtonLabel?: string;
    path?: string;
    className?: HeaderNavClassName;
    children: HeaderNavChildren;
}

declare const HeaderNav: React.FC<HeaderNavProps>;

export default HeaderNav;

