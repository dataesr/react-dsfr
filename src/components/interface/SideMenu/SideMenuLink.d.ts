import * as React from 'react';

export type SideMenuLinkChildren = string | React.ReactNode;

export interface SideMenuLinkProps {
  children: SideMenuLinkChildren;
  href?: string;
  className?: string;
  asLink?: React.ReactElement<any>;
  onClick?: (...args: any[])=>any;
  current?: boolean;
}

declare const SideMenuLink: React.FC<SideMenuLinkProps>;

export default SideMenuLink;
