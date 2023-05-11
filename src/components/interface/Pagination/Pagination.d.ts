import * as React from 'react';

export type PaginationAnchorAs = 'a' | any;

export interface PaginationButtonLabels {
  currentAria?: string;
  firstAria?: string;
  lastAria?: string;
  navigationAria?: string;
  nextAria?: string;
  nextLabel?: string;
  pageAria?: (...args: any[])=>any;
  prevAria?: string;
  prevLabel?: string;
}

export interface PaginationProps {
  anchorAs?: PaginationAnchorAs;
  buildURL?: any;
  buttonLabels?: PaginationButtonLabels;
  currentPage: number;
  onClick?: any;
  pageCount: number;
  surrendingPages?: number;
}

declare const Pagination: React.FC<PaginationProps>;

export default Pagination;
