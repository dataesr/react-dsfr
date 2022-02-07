import * as React from 'react';

export type SearchBarSize = "md" | "lg";

export type SearchBarClassName = string | Object | any[];

export interface SearchBarProps {
    label?: string;
    buttonLabel: string;
    placeholder?: string;
    /**
     * A function that handles search action. Input value is passed as prop.
     */
    onSearch: (...args: any[])=>any;
    size?: SearchBarSize;
    defaultValue?: string;
    className?: SearchBarClassName;
}

declare const SearchBar: React.FC<SearchBarProps>;

export default SearchBar;

