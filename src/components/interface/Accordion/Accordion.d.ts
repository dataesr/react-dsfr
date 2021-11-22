import * as React from 'react';

export type AccordionAs = "div" | "section";

export type AccordionSize = "sm" | "md" | "lg";

export type AccordionChildren = React.ReactNode[] | React.ReactNode;

export type AccordionClassName = string | Object | any[];

export interface AccordionProps {
    /**
     * Html tag to render accordion wrapper.
     */
    as?: AccordionAs;
    size?: AccordionSize;
    keepOpen?: boolean;
    color?: string;
    children: AccordionChildren;
    className?: AccordionClassName;
}

declare const Accordion: React.FC<AccordionProps>;

export default Accordion;

