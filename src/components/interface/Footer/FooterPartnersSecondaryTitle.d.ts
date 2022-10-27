import * as React from 'react';

export type FooterPartnersSecondaryTitleChildren = string | React.ReactNode;

export type FooterPartnersSecondaryTitleAs = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface FooterPartnersSecondaryTitleProps {
  __TYPE?: any;
  children: FooterPartnersSecondaryTitleChildren;
  as?: FooterPartnersSecondaryTitleAs;
  className?: string;
}

declare const FooterPartnersSecondaryTitle: React.FC<FooterPartnersSecondaryTitleProps>;

export default FooterPartnersSecondaryTitle;
