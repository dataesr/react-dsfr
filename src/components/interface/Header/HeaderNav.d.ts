import * as React from 'react';

export type HeaderNavChildren = React.ReactNode[] | React.ReactNode;

export interface HeaderNavProps {
  __TYPE?: any;
  closeButtonLabel?: string;
  path?: string;
  className?: string;
  children: HeaderNavChildren;
}

declare const HeaderNav: React.FC<HeaderNavProps>;

export default HeaderNav;
