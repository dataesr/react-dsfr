import * as React from 'react';

export type RadioClassName = string | Object | any[];

export type RadioHint = string | Object | any[];

export type RadioDisabled = boolean | undefined;

export type RadioMessageType = "error" | "valid" | "";

export type RadioSize = "sm" | "md";

export interface RadioProps {
    className?: RadioClassName;
    hint?: RadioHint;
    id?: string;
    svg?: React.ReactNode;
    isExtended?: boolean;
    disabled?: RadioDisabled;
    label: string;
    message?: string;
    messageType?: RadioMessageType;
    onChange?: (...args: any[])=>any;
    onGroupChange?: (...args: any[])=>any;
    size?: RadioSize;
    imageURL?: string;
    value: string;
    defaultChecked?: boolean;
}

declare const Radio: React.FC<RadioProps>;

export default Radio;

