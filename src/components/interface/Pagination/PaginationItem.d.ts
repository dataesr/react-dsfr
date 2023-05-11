import * as React from 'react';

export type PaginationItemAnchorAs = 'a' | any;

export interface PaginationItemProps {
  anchorAs?: PaginationItemAnchorAs;
  aria?: string;
  buildURL?: (...args: any[])=>any;
  isActive?: boolean;
  onClick?: (...args: any[])=>any;
  page: number;
}

declare const PaginationItem: React.FC<PaginationItemProps>;

export default PaginationItem;
