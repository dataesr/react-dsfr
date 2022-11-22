import * as React from 'react';
import { ComponentPropsWithRef } from 'react';

export type CheckboxHint = string | Object | any[];

export type CheckboxMessageType = 'error' | 'valid' | '';

export type CheckboxSize = 'sm' | 'md';

// Type always equals 'checkbox'
type OmittedProps = 'type';

export interface CheckboxProps extends Omit<ComponentPropsWithRef<'input'>, OmittedProps> {
  id?: string;
  hint?: CheckboxHint;
  label: string;
  message?: string;
  messageType?: CheckboxMessageType;
  size?: CheckboxSize;
}

declare const Checkbox: React.FC<CheckboxProps>;

export default Checkbox;
