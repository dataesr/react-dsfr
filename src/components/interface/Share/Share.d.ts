import * as React from 'react';

export type ShareChildren = React.ReactNode[] | React.ReactNode;

export interface ShareProps {
  title: string;
  children: ShareChildren;
  className?: string;
}

declare const Share: React.FC<ShareProps>;

export default Share;
