import * as React from 'react';

export type CardDescriptionChildren = string | React.ReactNode;

export type CardDescriptionAs = 'span' | 'div' | 'p';

export interface CardDescriptionProps {
  __TYPE?: any;
  children: CardDescriptionChildren;
  className?: string;
  as?: CardDescriptionAs;
}

declare const CardDescription: React.FC<CardDescriptionProps>;

export default CardDescription;
