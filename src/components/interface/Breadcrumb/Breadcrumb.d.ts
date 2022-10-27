import * as React from 'react';

export type BreadcrumbChildren = React.ReactNode[] | React.ReactNode;

export interface BreadcrumbProps {
  label?: string;
  buttonLabel?: string;
  children: BreadcrumbChildren;
  className?: string;
}

declare const Breadcrumb: React.FC<BreadcrumbProps>;

export default Breadcrumb;
