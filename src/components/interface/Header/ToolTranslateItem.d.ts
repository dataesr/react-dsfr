import * as React from 'react';

export type ToolTranslateChildren = React.ReactNode[] | React.ReactNode | string;

export interface ToolTranslateItemProps {
  children: ToolTranslateChildren;
  href: string;
  active: boolean;
  hrefLang: string;
  onClick?: (...args: any[])=>any;
  className?: string;
}

declare const ToolTranslateItem: React.FC<ToolTranslateItemProps>;

export default ToolTranslateItem;
