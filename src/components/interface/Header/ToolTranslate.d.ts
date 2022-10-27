import * as React from 'react';

export type ToolTranslateChildren = React.ReactNode[] | React.ReactNode | string;

export interface ToolTranslateProps {
  __TYPE?: any;
  children: ToolTranslateChildren;
  className?: string;
  title?: string;
  currentLang: string;
  descCurrentLang: string;
}

declare const ToolTranslate: React.FC<ToolTranslateProps>;

export default ToolTranslate;
