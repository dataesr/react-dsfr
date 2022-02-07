import * as React from 'react';

export type FooterBottomChildren = React.ReactNode[] | React.ReactNode;

export type FooterBottomClassName = string | Object | any[];

export interface FooterBottomProps {
    __TYPE?: any;
    children: FooterBottomChildren;
    className?: FooterBottomClassName;
}

declare const FooterBottom: React.FC<FooterBottomProps>;

export default FooterBottom;

