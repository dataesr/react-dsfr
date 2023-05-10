import * as React from 'react';

export type SelectWrapperHint = string | Object | any[];

export type SelectWrapperMessageType = 'error' | 'valid';

export interface SelectWrapperProps {
  children: React.ReactNode;
  className?: string;
  hint?: SelectWrapperHint;
  label?: string;
  message?: string;
  messageType?: SelectWrapperMessageType;
  onChange?: (...args: any[])=>any;
  required?: boolean;
  selectId: string;
}

declare const SelectWrapper: React.FC<SelectWrapperProps>;

export default SelectWrapper;
