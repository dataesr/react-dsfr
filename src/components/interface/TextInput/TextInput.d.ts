import * as React from 'react';

export type TextInputHint = string | Object | any[];

export type TextInputMessageType = "error" | "valid" | "";

export type TextInputType = "text" | "date" | "number" | "email" | "password";

export type TextInputClassName = string | Object | any[];

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    textarea?: boolean;
    type?: TextInputType;
    label?: string;
    hint?: TextInputHint;
    messageType?: TextInputMessageType;
    message?: string;
    required?: boolean;
    className?: TextInputClassName;
    withAutoValidation?: boolean;
    onBlur?: (...args: any[]) => any;
}

declare const TextInput: React.FC<TextInputProps>;

export default TextInput;

