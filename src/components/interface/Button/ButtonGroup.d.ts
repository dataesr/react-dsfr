import * as React from 'react';

export type ButtonGroupIsInlineFrom = 'xs' | 'sm' | 'md' | 'lg';

export type ButtonGroupSize = 'sm' | 'md' | 'lg';

export type ButtonGroupAlign = 'left' | 'center' | 'right';

export type ButtonGroupChildren = React.ReactNode[] | React.ReactNode;

export interface ButtonGroupProps {
  isInlineFrom?: ButtonGroupIsInlineFrom;
  className?: string;
  size?: ButtonGroupSize;
  align?: ButtonGroupAlign;
  children?: ButtonGroupChildren;
  isReversed?: boolean;
  isEquisized?: boolean;
}

declare const ButtonGroup: React.FC<ButtonGroupProps>;

export default ButtonGroup;
