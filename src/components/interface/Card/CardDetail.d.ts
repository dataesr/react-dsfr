import * as React from 'react';

export type CardDetailChildren = string | React.ReactNode;

export type CardDetailPosition = 'top' | 'bottom';

export interface CardDetailProps {
  __TYPE?: any;
  children: CardDetailChildren;
  className?: string;
  position?: CardDetailPosition;
}

declare const CardDetail: React.FC<CardDetailProps>;

export default CardDetail;
