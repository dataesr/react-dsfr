import * as React from 'react';

export type FooterPartnersTitleChildren = string | React.ReactNode;

export type FooterPartnersTitleAs = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type FooterPartnersTitleClassName = string | Object | any[];

export interface FooterPartnersTitleProps {
    __TYPE?: any;
    children: FooterPartnersTitleChildren;
    as?: FooterPartnersTitleAs;
    className?: FooterPartnersTitleClassName;
}

declare const FooterPartnersTitle: React.FC<FooterPartnersTitleProps>;

export default FooterPartnersTitle;

