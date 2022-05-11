import * as React from 'react';

export type DownloadClassName = string | Object | any[];

export interface DownloadProps {
    className?: DownloadClassName;
    fileName: string;
    label: string;
    metaData: string;
    lang?: string;
}

declare const Download: React.FC<DownloadProps>;

export default Download;

