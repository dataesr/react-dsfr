import * as React from 'react';

export type CalloutColorFamily = any | '';

export type CalloutChildren = React.ReactNode[] | React.ReactNode;

export interface CalloutProps {
  hasInfoIcon?: boolean;
  /**
     * first color is color of the border, second is background
     * be careful with contrast
     */
  colorFamily?: CalloutColorFamily;
  colors?: string[];
  children: CalloutChildren;
  className?: string;
}

declare const Callout: React.FC<CalloutProps>;

export default Callout;
