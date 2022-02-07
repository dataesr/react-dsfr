import * as React from 'react';

export type SideMenuChildren = React.ReactNode[] | React.ReactNode;

export type SideMenuClassName = string | Object | any[];

export interface SideMenuProps {
    sticky?: boolean;
    children: SideMenuChildren;
    className?: SideMenuClassName;
    title?: string;
    buttonLabel: string;
}

declare const SideMenu: React.FC<SideMenuProps>;

export default SideMenu;

