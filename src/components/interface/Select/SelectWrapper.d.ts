import * as React from 'react';

export type SelectWrapperHint = string | Object | any[];

export type SelectWrapperMessageType = 'error' | 'valid';

export interface SelectWrapperProps {
  className?: string;
  hint?: SelectWrapperHint;
  selectId: string;
  label?: string;
  message?: string;
  messageType?: SelectWrapperMessageType;
  required?: boolean;
  children: React.ReactNode;
  onChange?: (...args: any[])=>any;
}

declare const SelectWrapper: React.FC<SelectWrapperProps>;

export default SelectWrapper;
