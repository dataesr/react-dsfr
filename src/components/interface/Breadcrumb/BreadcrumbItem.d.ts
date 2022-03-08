import * as React from 'react';

export type BreadcrumbItemChildren = string | React.ReactNode;

export type BreadcrumbItemClassName = string | Object | any[];

export interface BreadcrumbItemProps {
    __TYPE?: any;
    children: BreadcrumbItemChildren;
    className?: BreadcrumbItemClassName;
    href?: string;
    asLink?: React.ReactElement<any>;
}

declare const BreadcrumbItem: React.FC<BreadcrumbItemProps>;

export default BreadcrumbItem;

