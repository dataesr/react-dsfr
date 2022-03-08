import * as React from 'react';

export type NavItemChildren = React.ReactNode[] | React.ReactNode | string;

export interface NavItemProps {
    children?: NavItemChildren;
    title: string;
    link?: string;
    current?: boolean;
    asLink?: React.ReactElement<any>;
    /**
     * @ignore
     */
    path?: string;
}

declare const NavItem: React.FC<NavItemProps>;

export default NavItem;

