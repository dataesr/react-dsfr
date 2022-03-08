import * as React from 'react';

export type FooterChildren = React.ReactNode[] | React.ReactNode;

export type FooterClassName = string | Object | any[];

export interface FooterProps {
    children: FooterChildren;
    className?: FooterClassName;
}

declare const Footer: React.FC<FooterProps>;

export default Footer;

