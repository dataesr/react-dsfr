import * as React from 'react';

export type TileImageClassName = string | Object | any[];

export interface TileImageProps {
    className?: TileImageClassName;
    title?: string;
    alt: string;
    /**
     * Source of the image — size is fixed 80x80
     */
    src: string;
}

declare const TileImage: React.FC<TileImageProps>;

export default TileImage;

