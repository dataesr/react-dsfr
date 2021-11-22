import * as React from 'react';

export type SideMenuLinkChildren = string | React.ReactNode;

export type SideMenuLinkClassName = string | Object | any[];

export interface SideMenuLinkProps {
    children: SideMenuLinkChildren;
    href?: string;
    className?: SideMenuLinkClassName;
    asLink?: React.ReactElement<any>;
    onClick?: (...args: any[])=>any;
}

declare const SideMenuLink: React.FC<SideMenuLinkProps>;

export default SideMenuLink;

