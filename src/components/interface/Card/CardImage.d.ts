import * as React from 'react';

export interface CardImageProps {
  __TYPE?: any;
  alt?: string;
  className?: string;
  src: string;
}

declare const CardImage: React.FC<CardImageProps>;

export default CardImage;
