import * as React from 'react';

export type TextInputHint = string | Object | any[];

export type TextInputMessageType = 'error' | 'valid' | '';

export type TextInputType = 'text' | 'date' | 'number' | 'email' | 'password';

export interface BaseTextInputProps {
  hint?: TextInputHint;
  label?: string
  messageType?: TextInputMessageType;
  message?: string;
  withAutoValidation?: boolean
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
