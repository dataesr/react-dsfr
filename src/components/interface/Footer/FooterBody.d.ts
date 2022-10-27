import * as React from 'react';

export type FooterBodyChildren = React.ReactNode[] | React.ReactNode;

export type FooterBodyDescription = React.ReactNode | string;

export interface FooterBodyProps {
  __TYPE?: any;
  children: FooterBodyChildren;
  description: FooterBodyDescription;
  className?: string;
}

declare const FooterBody: React.FC<FooterBodyProps>;

export default FooterBody;
