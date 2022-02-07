import * as React from 'react';

export type FooterTopChildren = React.ReactNode[] | React.ReactNode;

export type FooterTopAlign = "center" | "start" | "end";

export type FooterTopClassName = string | Object | any[];

export interface FooterTopProps {
    __TYPE?: any;
    children: FooterTopChildren;
    align?: FooterTopAlign;
    className?: FooterTopClassName;
}

declare const FooterTop: React.FC<FooterTopProps>;

export default FooterTop;

