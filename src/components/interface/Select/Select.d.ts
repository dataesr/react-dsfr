import * as React from 'react';

export type SelectMessageType = 'error' | 'valid';

export interface SelectOptions {
  disabled?: boolean;
  hidden?: boolean;
  label: string;
  value: string;
}

export type SelectSelected = React.ReactElement<any> | string;

export interface SelectProps {
  className?: string;
  disabled?: boolean;
  hint?: string | Object | any[];
  id?: string;
  label?: string;
  message?: string;
  messageType?: SelectMessageType;
  onChange?: (...args: any[])=>any;
  options: SelectOptions[];
  required?: boolean;
  selected?: SelectSelected;
}

declare const Select: React.FC<SelectProps>;

export default Select;
