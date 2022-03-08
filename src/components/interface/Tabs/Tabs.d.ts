import * as React from 'react';

export type TabsClassName = string | Object | any[];

export type TabsChildren = React.ReactNode[] | React.ReactNode | string;

export interface TabsProps {
    className?: TabsClassName;
    defaultActiveTab?: number;
    children: TabsChildren;
}

declare const Tabs: React.FC<TabsProps>;

export default Tabs;

