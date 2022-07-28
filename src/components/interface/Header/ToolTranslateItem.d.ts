import * as React from 'react';

export type ToolTranslateChildren = React.ReactNode[] | React.ReactNode | string;

export type ToolTranslateItemClassName = string | Object | any[];

export interface ToolTranslateItemProps {
    children: ToolTranslateChildren;
    href: string;
    active: boolean;
    hrefLang: string;
    onClick?: (...args: any[])=>any;
    className?: ToolTranslateItemClassName;
}

declare const ToolTranslateItem: React.FC<ToolTranslateItemProps>;

export default ToolTranslateItem;

