import * as React from 'react';

export type LogoChildren = string | React.ReactNode;

export interface LogoProps {
  __TYPE?: any;
  className?: string;
  children: LogoChildren;
  hrefTitle?: string;
  href?: string;
  /**
     * Number of characters to split title
     */
  splitCharacter?: number;
  asLink?: React.ReactElement<any>;
}

declare const Logo: React.FC<LogoProps>;

export default Logo;
