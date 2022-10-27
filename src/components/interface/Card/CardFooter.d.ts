import * as React from 'react';

export type CardFooterChildren = string | React.ReactNode;

export interface CardFooterProps {
  __TYPE?: any;
  children: CardFooterChildren;
  className?: string;
}

declare const CardFooter: React.FC<CardFooterProps>;

export default CardFooter;
