import * as React from 'react';

export type TabButtonClassName = string | Object | any[];

export interface TabButtonProps {
    className?: TabButtonClassName;
    onClickTab: (...args: any[])=>any;
    onKeyDownTab: (...args: any[])=>any;
    label: string;
    icon?: string;
    index: number;
    activeTab: number;
}

declare const TabButton: React.FC<TabButtonProps>;

export default TabButton;

