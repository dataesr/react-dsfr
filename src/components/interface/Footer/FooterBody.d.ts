import * as React from 'react';

export type FooterBodyChildren = React.ReactNode[] | React.ReactNode;

export type FooterBodyDescription = React.ReactNode | string;

export type FooterBodyClassName = string | Object | any[];

export interface FooterBodyProps {
    __TYPE?: any;
    children: FooterBodyChildren;
    description: FooterBodyDescription;
    className?: FooterBodyClassName;
}

declare const FooterBody: React.FC<FooterBodyProps>;

export default FooterBody;

