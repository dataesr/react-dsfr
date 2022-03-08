import * as React from 'react';

export type FooterBodyItemChildren = React.ReactNode[] | React.ReactNode;

export interface FooterBodyItemProps {
    __TYPE?: any;
    children: FooterBodyItemChildren;
}

declare const FooterBodyItem: React.FC<FooterBodyItemProps>;

export default FooterBodyItem;

