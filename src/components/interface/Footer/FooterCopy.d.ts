import * as React from 'react';

export type FooterCopyChildren = string | React.ReactNode;

export type FooterCopyClassName = string | Object | any[];

export interface FooterCopyProps {
    __TYPE?: any;
    children: FooterCopyChildren;
    className?: FooterCopyClassName;
}

declare const FooterCopy: React.FC<FooterCopyProps>;

export default FooterCopy;

