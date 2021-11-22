import * as React from 'react';

export type NavItemWithSubItemChildren = React.ReactNode[] | React.ReactNode | string;

export interface NavItemWithSubItemProps {
    children?: NavItemWithSubItemChildren;
    title: string;
    link?: string;
    current?: boolean;
    asLink?: React.ReactElement<any>;
    /**
     * @ignore
     */
    path?: string;
}

declare const NavItemWithSubItem: React.FC<NavItemWithSubItemProps>;

export default NavItemWithSubItem;

