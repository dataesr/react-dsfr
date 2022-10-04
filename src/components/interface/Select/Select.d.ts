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

export interface SelectProps extends SelectWrapperProps{
    id?: string;
    messageType?: SelectMessageType;
    options: SelectOptions[];
    selected?: SelectSelected;
}

declare const Select: React.FC<SelectProps>;

export default Select;

