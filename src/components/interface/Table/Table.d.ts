import * as React from 'react';

export type TableCaptionPosition = "top" | "bottom" | "none";

export type TableRowKey = string | ((...args: any[])=>any);

export type TableClassName = string | Object | any[];

export type TablePaginationPosition = "left" | "center" | "right";

export interface TableProps {
    columns: Object[];
    data: any[];
    fixedLayout?: boolean;
    tableID?: string;
    tableClassName?: string;
    noScroll?: boolean;
    bordered?: boolean;
    captionPosition?: TableCaptionPosition;
    caption?: string;
    rowKey: TableRowKey;
    children?: React.ReactNode;
    className?: TableClassName;
    pagination?: boolean;
    paginationPosition?: TablePaginationPosition;
    surrendingPages?: number;
    perPage?: number;
    page?: number;
    setPage?: (...args: any[])=>any;
}

declare const Table: React.FC<TableProps>;

export default Table;

