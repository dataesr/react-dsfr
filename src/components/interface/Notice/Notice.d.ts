import * as React from 'react';

export type NoticeChildren = React.ReactNode[] | React.ReactNode | string;

export interface NoticeProps {
  className?: string;
  children?: NoticeChildren;
  title: string;
  visible?: boolean;
  asLink?: React.ReactElement<any>;
}

declare const Notice: React.FC<NoticeProps>;

export default Notice;
