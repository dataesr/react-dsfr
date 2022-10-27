import * as React from 'react';

export type TextInputHint = string | Object | any[];

export type TextInputMessageType = 'error' | 'valid' | '';

export type TextInputType = 'text' | 'date' | 'number' | 'email' | 'password';

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  textarea?: boolean;
  type?: TextInputType;
  label?: string;
  hint?: TextInputHint;
  messageType?: TextInputMessageType;
  message?: string;
  required?: boolean;
  className?: string;
  withAutoValidation?: boolean;
  onBlur?: (...args: any[])=>any;
  onChange?: (...args: any[])=>any;
  value?: string;
}

declare const TextInput: React.FC<TextInputProps>;

export default TextInput;
