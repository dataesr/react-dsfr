import * as React from 'react';

export type SummaryItemClassName = string | Object | string[];

export interface SummaryItemProps {
    children: string;
    href?: string;
    className?: SummaryItemClassName;
    target?: string;
    asLink?: React.ReactElement<any>;
}

declare const SummaryItem: React.FC<SummaryItemProps>;

export default SummaryItem;

