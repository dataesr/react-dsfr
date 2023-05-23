import * as React from 'react';

export type ToggleGroupChildren = string | Object | any[];

export type ToggleGroupHint = string | Object | any[];

export type ToggleGroupMessageType = 'error' | 'valid' | '';

export interface ToggleGroupProps {
  children?: ToggleGroupChildren;
  className?: string;
  labelLeft?: boolean;
  hasSeparator: boolean;
  onChange?: (...args: any[])=>any;
}

declare const ToggleGroup: React.FC<ToggleGroupProps>;

export default ToggleGroup;
