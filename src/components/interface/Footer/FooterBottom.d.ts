import * as React from 'react';

export type FooterBottomChildren = React.ReactNode[] | React.ReactNode;

export interface FooterBottomProps {
  __TYPE?: any;
  children: FooterBottomChildren;
  className?: string;
}

declare const FooterBottom: React.FC<FooterBottomProps>;

export default FooterBottom;
