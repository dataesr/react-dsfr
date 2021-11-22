import * as React from 'react';

export type FooterLinkChildren = string | React.ReactNode;

export type FooterLinkSection = "bottom" | "top";

export type FooterLinkClassName = string | Object | any[];

export interface FooterLinkProps {
    __TYPE?: any;
    children: FooterLinkChildren;
    href?: string;
    onClick?: (...args: any[])=>any;
    section?: FooterLinkSection;
    className?: FooterLinkClassName;
    asLink?: React.ReactElement<any>;
    target?: string;
}

declare const FooterLink: React.FC<FooterLinkProps>;

export default FooterLink;

