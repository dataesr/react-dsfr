import * as React from 'react';

export type FooterPartnersLogoClassName = string | Object | any[];

export interface FooterPartnersLogoProps {
  __TYPE?: any;
  href?: string;
  imageSrc?: string;
  imageAlt: string;
  className?: FooterPartnersLogoClassName;
  asLink?: React.ReactElement<any>;
  isMain?: boolean;
  target?: string;
}

declare const FooterPartnersLogo: React.FC<FooterPartnersLogoProps>;

export default FooterPartnersLogo;
