import * as React from 'react';

export type CheckboxHint = string | Object | any[];

export type CheckboxDisabled = boolean | undefined;

export type CheckboxMessageType = 'error' | 'valid' | '';

export type CheckboxSize = 'sm' | 'md';

export interface CheckboxProps {
  className?: string;
  id?: string;
  disabled?: CheckboxDisabled;
  hint?: CheckboxHint;
  label: string;
  message?: string;
  messageType?: CheckboxMessageType;
  size?: CheckboxSize;
  defaultChecked?: boolean;
  onClick?: (...args: any[])=>any;
}

declare const Checkbox: React.FC<CheckboxProps>;

export default Checkbox;
