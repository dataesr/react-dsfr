import * as React from 'react';

export type FooterLinkChildren = string | React.ReactNode;

export type FooterLinkSection = 'bottom' | 'top';

export interface FooterLinkProps {
  __TYPE?: any;
  children?: FooterLinkChildren;
  href?: string;
  onClick?: (...args: any[])=>any;
  section?: FooterLinkSection;
  className?: string;
  asLink?: React.ReactElement<any>;
  target?: string;
}

declare const FooterLink: React.FC<FooterLinkProps>;

export default FooterLink;
