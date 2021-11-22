import * as React from 'react';

export type SearchableSelectClassName = string | Object | any[];

export type SearchableSelectHint = string | Object | any[];

export type SearchableSelectMessageType = "error" | "valid";

export interface SearchableSelectOptions {
    value: string;
    label: string;
    disabled?: boolean;
    hidden?: boolean;
}

export interface SearchableSelectProps {
    className?: SearchableSelectClassName;
    disabled?: boolean;
    hint?: SearchableSelectHint;
    id?: string;
    label?: string;
    message?: string;
    messageType?: SearchableSelectMessageType;
    name?: string;
    onChange?: (...args: any[])=>any;
    onBlur?: (...args: any[])=>any;
    onFocus?: (...args: any[])=>any;
    onKeyDown?: (...args: any[])=>any;
    options: SearchableSelectOptions[];
    selected?: string;
    required?: boolean;
    filter?: (...args: any[])=>any;
}

declare const SearchableSelect: React.FC<SearchableSelectProps>;

export default SearchableSelect;

