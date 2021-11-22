import * as React from 'react';

export type TextInputHint = string | Object | any[];

export type TextInputMessageType = "error" | "valid" | "";

export type TextInputClassName = string | Object | any[];

export interface TextInputProps {
    textarea?: boolean;
    label?: string;
    hint?: TextInputHint;
    messageType?: TextInputMessageType;
    message?: string;
    required?: boolean;
    className?: TextInputClassName;
    withAutoValidation?: boolean;
    onBlur?: (...args: any[])=>any;
}

declare const TextInput: React.FC<TextInputProps>;

export default TextInput;

