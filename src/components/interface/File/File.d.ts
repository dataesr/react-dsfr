import * as React from 'react';

export type FileClassName = string | Object | any[];

export interface FileProps {
    className?: FileClassName;
    label: string;
    multiple?: boolean;
    onChange?: (...args: any[])=>any;
    errorMessage?: string;
    hint?: string;
}

declare const File: React.FC<FileProps>;

export default File;

