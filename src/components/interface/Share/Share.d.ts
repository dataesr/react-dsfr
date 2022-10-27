import * as React from 'react';

export type ShareChildren = React.ReactNode[] | React.ReactNode;

export type ShareClassName = string | Object | any[];

export interface ShareProps {
  title: string;
  children: ShareChildren;
  className?: ShareClassName;
}

declare const Share: React.FC<ShareProps>;

export default Share;
