import * as React from 'react';

export type CardHeaderChildren = string | React.ReactNode;

export interface CardHeaderProps {
  __TYPE?: any;
  children: CardHeaderChildren;
}

declare const CardHeader: React.FC<CardHeaderProps>;

export default CardHeader;
