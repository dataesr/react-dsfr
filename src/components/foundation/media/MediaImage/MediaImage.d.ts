import * as React from 'react';

export type MediaImageClassName = string | Object | any[];

export type MediaImageSize = "sm" | "md" | "lg";

export interface MediaImageProps {
    alt?: string;
    className?: MediaImageClassName;
    legend?: string;
    size?: MediaImageSize;
    src: string;
}

declare const MediaImage: React.FC<MediaImageProps>;

export default MediaImage;

