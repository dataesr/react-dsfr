import * as React from 'react';

export type CardFooterChildren = string | React.ReactNode;

export type CardFooterClassName = string | Object | any[];

export interface CardFooterProps {
  __TYPE?: any;
  children: CardFooterChildren;
  className?: CardFooterClassName;
}

declare const CardFooter: React.FC<CardFooterProps>;

export default CardFooter;
