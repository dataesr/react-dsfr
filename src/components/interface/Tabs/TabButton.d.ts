import * as React from 'react';

export interface TabButtonProps {
  className?: string;
  onClickTab: (...args: any[])=>any;
  onKeyDownTab: (...args: any[])=>any;
  label: string;
  icon?: string;
  index: number;
  activeTab: number;
}

declare const TabButton: React.FC<TabButtonProps>;

export default TabButton;
