import * as React from 'react';

export type CheckboxGroupChildren = React.ReactNode[] | React.ReactNode;

export type CheckboxGroupClassName = string | Object | any[];

export type CheckboxGroupHint = string | Object | any[];

export type CheckboxGroupMessageType = "error" | "valid" | "";

export interface CheckboxGroupProps {
    children: CheckboxGroupChildren;
    className?: CheckboxGroupClassName;
    hint?: CheckboxGroupHint;
    ariaLabel?: string;
    isInline?: boolean;
    legend: string;
    message?: string;
    messageType?: CheckboxGroupMessageType;
    required?: boolean;
    /**
     * color[0] is background, color[1] is color
     */
    checkboxColors?: string[];
}

declare const CheckboxGroup: React.FC<CheckboxGroupProps>;

export default CheckboxGroup;

