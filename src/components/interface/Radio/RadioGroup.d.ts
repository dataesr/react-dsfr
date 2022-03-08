import * as React from 'react';

export type RadioGroupChildren = string | Object | any[];

export type RadioGroupClassName = string | Object | any[];

export type RadioGroupHint = string | Object | any[];

export type RadioGroupMessageType = "error" | "valid" | "";

export interface RadioGroupProps {
    children?: RadioGroupChildren;
    className?: RadioGroupClassName;
    hint?: RadioGroupHint;
    ariaLabel?: string;
    disabled?: boolean;
    isInline?: boolean;
    legend: string;
    message?: string;
    messageType?: RadioGroupMessageType;
    name?: string;
    value?: string;
    onChange?: (...args: any[])=>any;
    required?: boolean;
}

declare const RadioGroup: React.FC<RadioGroupProps>;

export default RadioGroup;

