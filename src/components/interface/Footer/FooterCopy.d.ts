import * as React from 'react';

export type FooterCopyChildren = string | React.ReactNode;

export interface FooterCopyProps {
  __TYPE?: any;
  children: FooterCopyChildren;
  className?: string;
}

declare const FooterCopy: React.FC<FooterCopyProps>;

export default FooterCopy;
