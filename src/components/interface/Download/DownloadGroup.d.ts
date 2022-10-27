import * as React from 'react';

export type DownloadGroupChildren = string | React.ReactNode;

export type DownloadGroupClassName = string | Object | any[];

export interface DownloadGroupProps {
  className?: DownloadGroupClassName;
  title: string;
  children: DownloadGroupChildren
}

declare const Download: React.FC<DownloadGroupProps>;

export default Download;
