import * as React from 'react';

export type FooterTopChildren = React.ReactNode[] | React.ReactNode;

export type FooterTopAlign = 'center' | 'start' | 'end';

export interface FooterTopProps {
  __TYPE?: any;
  children: FooterTopChildren;
  align?: FooterTopAlign;
  className?: string;
}

declare const FooterTop: React.FC<FooterTopProps>;

export default FooterTop;
