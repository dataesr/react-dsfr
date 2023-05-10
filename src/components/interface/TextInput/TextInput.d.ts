import * as React from 'react';

export type TextInputHint = string | Object | any[];

export type TextInputMessageType = 'error' | 'valid' | '';

export type TextInputType = 'text' | 'date' | 'number' | 'email' | 'password';

export interface BaseTextInputProps {
  className?: string;
  disabled?: boolean;
  hint?: TextInputHint;
  label?: string;
  message?: string;
  messageType?: TextInputMessageType;
  onBlur?: (...args: any[])=>any;
  required?: boolean;
  withAutoValidation?: boolean;
}

export interface TextFieldProps extends React.ComponentPropsWithRef<'input'>, BaseTextInputProps {
  textarea?: false;
  type?: TextInputType;
}

export interface TextareaProps extends React.ComponentPropsWithRef<'textarea'>, BaseTextInputProps {
  textarea: true;
}

export type TextInputProps = TextFieldProps | TextareaProps;

declare const TextInput: React.FC<TextInputProps>;

export default TextInput;
