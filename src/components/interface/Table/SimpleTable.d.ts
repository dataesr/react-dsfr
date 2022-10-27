import * as React from 'react';

export type SimpleTableCaptionPosition = 'top' | 'bottom' | 'none';

export interface SimpleTableProps {
  emptyDataMessage?: string;
  fixedLayout?: boolean;
  noScroll?: boolean;
  bordered?: boolean;
  captionPosition?: SimpleTableCaptionPosition;
  caption: string;
  className?: string;
  data: Object[];
}

declare const SimpleTable: React.FC<SimpleTableProps>;

export default SimpleTable;
