import * as React from 'react';

export type SideMenuItemChildren = React.ReactNode[] | React.ReactNode;

export type SideMenuItemClassName = string | Object | any[];

export interface SideMenuItemProps {
    children: SideMenuItemChildren;
    title: string;
    expandedDefault?: boolean;
    className?: SideMenuItemClassName;
}

declare const SideMenuItem: React.FC<SideMenuItemProps>;

export default SideMenuItem;

