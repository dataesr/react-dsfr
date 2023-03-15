import * as React from 'react';

export type TabChildren = React.ReactNode[] | React.ReactNode | string;

export interface TabProps {
  className?: string;
  children?: TabChildren;
  index: number;
  activeTab: number;
  label: React.ReactNode;
  icon?: string;
}

declare const Tab: React.FC<TabProps>;

export default Tab;
