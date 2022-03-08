import * as React from 'react';

export type BreadcrumbChildren = React.ReactNode[] | React.ReactNode;

export type BreadcrumbClassName = string | Object | any[];

export interface BreadcrumbProps {
    label?: string;
    buttonLabel?: string;
    children: BreadcrumbChildren;
    className?: BreadcrumbClassName;
}

declare const Breadcrumb: React.FC<BreadcrumbProps>;

export default Breadcrumb;

