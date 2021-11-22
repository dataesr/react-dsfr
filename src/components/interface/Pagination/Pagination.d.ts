import * as React from 'react';

export type PaginationAnchorAs = "a" | any;

export interface PaginationButtonLabels {
    navigationAria?: string;
    currentAria?: string;
    pageAria?: (...args: any[])=>any;
    prevLabel?: string;
    nextLabel?: string;
    prevAria?: string;
    nextAria?: string;
    firstAria?: string;
    lastAria?: string;
}

export interface PaginationProps {
    currentPage: number;
    pageCount: number;
    buildURL?: any;
    onClick?: any;
    anchorAs?: PaginationAnchorAs;
    buttonLabels?: PaginationButtonLabels;
    surrendingPages?: number;
}

declare const Pagination: React.FC<PaginationProps>;

export default Pagination;

