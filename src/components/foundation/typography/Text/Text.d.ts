import * as React from 'react';

export type TextAs = "p" | "span";

export type TextSize = "xs" | "sm" | "md" | "lg" | "lead";

export type TextChildren = string | React.ReactNode;

export type TextClassName = string | Object | any[];

export interface TextProps {
    /**
     * html tag to render
     */
    as?: TextAs;
    size?: TextSize;
    /**
     * If true Spectral is used instead of Marianne.
     */
    alt?: boolean;
    children: TextChildren;
    className?: TextClassName;
}

declare const Text: React.FC<TextProps>;

export default Text;

