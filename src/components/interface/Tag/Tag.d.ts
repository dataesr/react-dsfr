import * as React from 'react';

export type TagClassName = string | Object | any[];

export type TagAs = "a" | "span" | "p";

export type TagChildren = string | React.ReactNode;

export type TagSize = "sm" | "md" | "lg";

export type TagIconPosition = "left" | "right";

export interface TagProps {
    className?: TagClassName;
    as?: TagAs;
    children?: TagChildren;
    size?: TagSize;
    href?: string;
    title?: string;
    target?: string;
    icon?: string;
    iconPosition?: TagIconPosition;
}

declare const Tag: React.FC<TagProps>;

export default Tag;

