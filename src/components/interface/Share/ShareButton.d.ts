import * as React from 'react';

export interface ShareButtonProps {
  type: string;
  label: string;
  href?: string;
  onClick?: (...args: any[]) => any;
  className?: string;
}

declare const ShareButton: React.FC<ShareButtonProps>;

export default ShareButton;
