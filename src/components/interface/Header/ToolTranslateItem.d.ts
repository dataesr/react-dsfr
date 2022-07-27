import * as React from 'react';

export type ToolTranslateChildren = React.ReactNode[] | React.ReactNode | string;

export type ToolTranslateClassName = string | Object | any[];

export interface ToolTranslateItemProps {
    children: ToolTranslateChildren;
    href: string;
    active: boolean;
    hrefLang: string;
    onClick?: (...args: any[])=>any;
    className?: ToolTranslateClassName;
}

declare const ToolTranslateItem: React.FC<ToolTranslateItemProps>;

export default ToolTranslateItem;

