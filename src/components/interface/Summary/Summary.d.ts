import * as React from 'react';

export type SummaryChildren = React.ReactNode[] | React.ReactNode | string;

export interface SummaryProps {
    children: SummaryChildren;
    title: string;
}

declare const Summary: React.FC<SummaryProps>;

export default Summary;

