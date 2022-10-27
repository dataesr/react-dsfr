import * as React from 'react';

export type SideMenuChildren = React.ReactNode[] | React.ReactNode;

export interface SideMenuProps {
  sticky?: boolean;
  children: SideMenuChildren;
  className?: string;
  title?: string;
  buttonLabel: string;
}

declare const SideMenu: React.FC<SideMenuProps>;

export default SideMenu;
