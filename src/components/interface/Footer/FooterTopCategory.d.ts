import * as React from 'react';

export type FooterTopCategoryChildren = React.ReactNode[] | React.ReactNode;

export interface FooterTopCategoryProps {
  __TYPE?: any;
  title: string;
  n?: string;
  offset?: string;
  children: FooterTopCategoryChildren;
  className?: string;
}

declare const FooterTopCategory: React.FC<FooterTopCategoryProps>;

export default FooterTopCategory;
