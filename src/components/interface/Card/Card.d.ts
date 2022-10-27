import * as React from 'react';

export type CardChildren = React.ReactNode[] | React.ReactNode;

export type CardAnchorAs = 'a' | any;
export type CardSize = 'sm' | 'md' | 'lg';

export type CardClassName = string | Object | any[];

export interface CardProps {
  children: CardChildren;
  anchorAs?: CardAnchorAs;
  href?: string;
  icon?: string;
  ariaLabel?: string;
  isHorizontal?: boolean;
  isGrey?: boolean;
  hasShadow?: boolean;
  hasBorder?: boolean;
  hasBackground?: boolean;
  className?: CardClassName;
  size?: CardSize;
  bodyClassName?: string;
  hasArrow?: boolean;
  asLink?: React.ReactElement<any>;
  onClick?: (...args: any[]) => any;
}

declare const Card: React.FC<CardProps>;

export default Card;
