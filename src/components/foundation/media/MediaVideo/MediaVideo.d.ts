import * as React from 'react';

export type MediaVideoRatio = '' | '4x3';

export type MediaVideoSize = 'sm' | 'md' | 'lg';

export interface MediaVideoProps {
  buttonLabel?: string;
  children: React.ReactNode;
  className?: string;
  legend?: string;
  onTranscriptionClick?: (...args: any[])=>any;
  ratio?: MediaVideoRatio;
  size?: MediaVideoSize;
}

declare const MediaVideo: React.FC<MediaVideoProps>;

export default MediaVideo;
