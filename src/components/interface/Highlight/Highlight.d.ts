import * as React from 'react';

export type HighlightSize = 'sm' | 'md' | 'lg';

export type HighlightChildren = string | React.ReactNode;

export type HighlightColorFamily = any | '';

export interface HighlightProps {
  size?: HighlightSize;
  children: HighlightChildren;
  className?: string;
  color?: string;
  colorFamily?: HighlightColorFamily;
}

declare const Highlight: React.FC<HighlightProps>;

export default Highlight;
