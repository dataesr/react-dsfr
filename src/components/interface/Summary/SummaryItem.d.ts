import * as React from 'react';

export interface SummaryItemProps {
  children: string;
  href?: string;
  className?: string;
  target?: string;
  asLink?: React.ReactElement<any>;
}

declare const SummaryItem: React.FC<SummaryItemProps>;

export default SummaryItem;
