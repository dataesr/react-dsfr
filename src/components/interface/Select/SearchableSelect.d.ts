import * as React from 'react';

export type SearchableSelectHint = string | Object | any[];

export type SearchableSelectMessageType = 'error' | 'valid';

export interface SearchableSelectOptions {
  disabled?: boolean;
  hidden?: boolean;
  label: string;
  value: string;
}

export interface SearchableSelectProps {
  className?: string;
  disabled?: boolean;
  filter?: (...args: any[])=>any;
  hint?: SearchableSelectHint;
  id?: string;
  label?: string;
  message?: string;
  messageType?: SearchableSelectMessageType;
  name?: string;
  onBlur?: (...args: any[])=>any;
  onChange?: (...args: any[])=>any;
  onFocus?: (...args: any[])=>any;
  onKeyDown?: (...args: any[])=>any;
  onTextChange?: (...args: any[])=>any;
  options: SearchableSelectOptions[];
  placeholder?: string;
  required?: boolean;
  selected?: string;
}

declare const SearchableSelect: React.FC<SearchableSelectProps>;

export default SearchableSelect;
