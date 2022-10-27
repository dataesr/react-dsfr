import * as React from 'react';

export type SideMenuItemChildren = React.ReactNode[] | React.ReactNode;

export interface SideMenuItemProps {
  children: SideMenuItemChildren;
  title: string;
  expandedDefault?: boolean;
  className?: string;
  current?: boolean;
}

declare const SideMenuItem: React.FC<SideMenuItemProps>;

export default SideMenuItem;
