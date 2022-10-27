import * as React from 'react';

export type MediaImageSize = 'sm' | 'md' | 'lg';

export interface MediaImageProps {
  alt?: string;
  className?: string;
  legend?: string;
  size?: MediaImageSize;
  src: string;
}

declare const MediaImage: React.FC<MediaImageProps>;

export default MediaImage;
