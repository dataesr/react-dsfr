import * as React from 'react';

export type CardImageClassName = string | Object | any[];

export interface CardImageProps {
    __TYPE?: any;
    alt?: string;
    className?: CardImageClassName;
    src: string;
}

declare const CardImage: React.FC<CardImageProps>;

export default CardImage;

