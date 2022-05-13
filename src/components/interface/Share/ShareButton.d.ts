import * as React from 'react';

export type ShareButtonClassName = string | Object | any[];

export interface ShareButtonProps {
    type: string;
    label: string;
    href?: string;
    onClick?: (...args: any[]) => any;
    className?: ShareButtonClassName;
}

declare const ShareButton: React.FC<ShareButtonProps>;

export default ShareButton;

