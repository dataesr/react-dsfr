import * as React from 'react';

export interface DownloadProps {
  className?: string;
  fileName: string;
  label: string;
  metaData?: string;
  description?: string;
  lang?: string;
  asCard?: boolean;
  openFile?: boolean;
}

declare const Download: React.FC<DownloadProps>;

export default Download;
