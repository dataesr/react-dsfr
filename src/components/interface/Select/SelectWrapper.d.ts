import * as React from 'react';

export type SelectWrapperClassName = string | Object | any[];

export type SelectWrapperHint = string | Object | any[];

export type SelectWrapperMessageType = "error" | "valid";

export interface SelectWrapperProps {
    className?: SelectWrapperClassName;
    hint?: SelectWrapperHint;
    selectId: string;
    label?: string;
    message?: string;
    messageType?: SelectWrapperMessageType;
    required?: boolean;
    children: React.ReactNode;
}

declare const SelectWrapper: React.FC<SelectWrapperProps>;

export default SelectWrapper;

