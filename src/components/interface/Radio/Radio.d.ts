import * as React from 'react';

export type RadioDisabled = boolean | undefined;

export type RadioHint = string | Object | any[];

export type RadioMessageType = 'error' | 'valid' | '';

export type RadioSize = 'sm' | 'md';

export interface RadioProps {
  className?: string;
  defaultChecked?: boolean;
  disabled?: RadioDisabled;
  hint?: RadioHint;
  id?: string;
  imageURL?: string;
  isExtended?: boolean;
  label: string;
  message?: string;
  messageType?: RadioMessageType;
  onChange?: (...args: any[])=>any;
  onGroupChange?: (...args: any[])=>any;
  size?: RadioSize;
  svg?: React.ReactNode;
  value: string;
}

declare const Radio: React.FC<RadioProps>;

export default Radio;
