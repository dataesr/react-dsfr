import * as React from 'react';
import { SelectWrapperProps } from './SelectWrapper';

export type SelectMessageType = "error" | "valid";

export interface SelectOptions {
    value: string;
    label: string;
    disabled?: boolean;
    hidden?: boolean;
}

export type SelectSelected = React.ReactElement<any> | string;

export interface SelectProps{
    id?: string;
    message?: string;
    messageType?: SelectMessageType;
    options: SelectOptions[];
    selected?: SelectSelected;
    className?: string | Object | any[];
    hint?: string | Object | any[];
    label?: string;
    required?: boolean;
    onChange?: (...args: any[])=>any;
}

declare const Select: React.FC<SelectProps>;

export default Select;

