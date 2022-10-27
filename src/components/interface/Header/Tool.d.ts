import * as React from 'react';

export type ToolChildren = React.ReactNode[] | React.ReactNode | string;

export interface ToolProps {
  children: ToolChildren;
  className?: string;
  closeButtonLabel?: string;
}

declare const Tool: React.FC<ToolProps>;

export default Tool;
