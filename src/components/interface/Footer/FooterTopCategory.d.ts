import * as React from 'react';

export type FooterTopCategoryChildren = React.ReactNode[] | React.ReactNode;

export type FooterTopCategoryClassName = string | Object | any[];

export interface FooterTopCategoryProps {
    __TYPE?: any;
    title: string;
    n?: string;
    offset?: string;
    children: FooterTopCategoryChildren;
    className?: FooterTopCategoryClassName;
}

declare const FooterTopCategory: React.FC<FooterTopCategoryProps>;

export default FooterTopCategory;

