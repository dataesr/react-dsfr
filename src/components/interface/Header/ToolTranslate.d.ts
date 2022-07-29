import * as React from 'react';
export type ToolTranslateChildren = React.ReactNode[] | React.ReactNode | string;

export type ToolTranslateClassName = string | Object | any[];

export interface ToolTranslateProps {
    __TYPE?: any;
    children: ToolTranslateChildren;
    className?: ToolTranslateClassName;
    title?: string;
    currentLang: string;
    descCurrentLang: string;
}

declare const ToolTranslate: React.FC<ToolTranslateProps>;

export default ToolTranslate;

