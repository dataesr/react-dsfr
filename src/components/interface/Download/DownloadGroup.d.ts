import * as React from 'react';

export type DownloadGroupChildren = string | React.ReactNode;

export interface DownloadGroupProps {
  className?: string;
  title: string;
  children: DownloadGroupChildren
}

declare const Download: React.FC<DownloadGroupProps>;

export default Download;
