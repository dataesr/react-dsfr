import * as React from 'react';

export type FooterChildren = React.ReactNode[] | React.ReactNode;

export interface FooterProps {
  children: FooterChildren;
  className?: string;
}

declare const Footer: React.FC<FooterProps>;

export default Footer;
