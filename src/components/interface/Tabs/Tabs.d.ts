import * as React from 'react';

export type TabsChildren = React.ReactNode[] | React.ReactNode | string;

export interface TabsProps {
  className?: string;
  defaultActiveTab?: number;
  children: TabsChildren;
  onChange?: (index: number) => void
}

declare const Tabs: React.FC<TabsProps>;

export default Tabs;
