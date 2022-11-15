import * as React from 'react';

export interface FileProps {
  className?: string;
  label: string;
  multiple?: boolean;
  onChange?: (...args: any[])=>any;
  errorMessage?: string;
  hint?: string;
  accept?: string;
}

declare const File: React.FC<FileProps>;

export default File;
