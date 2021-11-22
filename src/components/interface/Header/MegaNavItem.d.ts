import * as React from 'react';

export type MegaNavItemAs = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type MegaNavItemChildren = React.ReactNode[] | React.ReactNode | string;

export interface MegaNavItemProps {
    as?: MegaNavItemAs;
    children?: MegaNavItemChildren;
    title: string;
    closeButtonLabel?: string;
    linkLabel?: string;
    link?: string;
    description?: string;
    current?: boolean;
}

declare const MegaNavItem: React.FC<MegaNavItemProps>;

export default MegaNavItem;

