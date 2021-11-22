import * as React from 'react';

export type ToggleClassName = string | Object | any[];

export interface ToggleProps {
    onChange?: (...args: any[])=>any;
    id?: string;
    className?: ToggleClassName;
    hasSeparator?: boolean;
    hasLabelLeft?: boolean;
    description?: string;
    label: string;
    toggleColor?: string;
}

declare const Toggle: React.FC<ToggleProps>;

export default Toggle;

