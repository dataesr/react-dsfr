import * as React from 'react';

export type AccordionItemTitleAs = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type AccordionItemSize = "sm" | "md" | "lg";

export type AccordionItemChildren = React.ReactNode[] | React.ReactNode | string;

export type AccordionItemClassName = string | Object | any[];

export interface AccordionItemProps {
    /**
     * Html tag to render in accordion title.
     */
    titleAs?: AccordionItemTitleAs;
    /**
     * @ignore
     */
    initExpand?: boolean;
    onClick?: (...args: any[])=>any;
    /**
     * @ignore
     */
    expandedItems?: number[];
    size?: AccordionItemSize;
    id?: number;
    color?: string;
    title: string;
    keepOpen?: boolean;
    children: AccordionItemChildren;
    className?: AccordionItemClassName;
}

declare const AccordionItem: React.FC<AccordionItemProps>;

export default AccordionItem;

