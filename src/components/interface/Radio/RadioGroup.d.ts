import * as React from 'react';

export type RadioGroupChildren = string | Object | any[];

export type RadioGroupHint = string | Object | any[];

export type RadioGroupMessageType = 'error' | 'valid' | '';

export interface RadioGroupProps {
  ariaLabel?: string;
  children?: RadioGroupChildren;
  className?: string;
  disabled?: boolean;
  hint?: RadioGroupHint;
  isInline?: boolean;
  legend: string;
  message?: string;
  messageType?: RadioGroupMessageType;
  name?: string;
  onChange?: (...args: any[])=>any;
  required?: boolean;
  value?: string;
}

declare const RadioGroup: React.FC<RadioGroupProps>;

export default RadioGroup;
