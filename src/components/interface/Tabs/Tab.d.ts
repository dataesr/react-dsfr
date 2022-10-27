import * as React from 'react';

export type TabClassName = string | Object | any[];

export type TabChildren = React.ReactNode[] | React.ReactNode | string;

export interface TabProps {
  className?: TabClassName;
  children?: TabChildren;
  index: number;
  activeTab: number;
}

declare const Tab: React.FC<TabProps>;

export default Tab;
