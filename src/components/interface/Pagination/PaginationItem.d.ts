import * as React from 'react';

export type PaginationItemAnchorAs = "a" | any;

export interface PaginationItemProps {
    page: number;
    isActive?: boolean;
    buildURL?: (...args: any[])=>any;
    onClick?: (...args: any[])=>any;
    aria?: string;
    anchorAs?: PaginationItemAnchorAs;
}

declare const PaginationItem: React.FC<PaginationItemProps>;

export default PaginationItem;

