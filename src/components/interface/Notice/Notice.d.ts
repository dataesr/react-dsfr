import * as React from 'react';

export type NoticeClassName = string | Object | any[];

export type NoticeChildren = React.ReactNode[] | React.ReactNode | string;

export interface NoticeProps {
    className?: NoticeClassName;
    children?: NoticeChildren;
}

declare const Notice: React.FC<NoticeProps>;

export default Notice;

