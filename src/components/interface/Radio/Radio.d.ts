import * as React from 'react';

export type RadioClassName = string | Object | any[];

export type RadioHint = string | Object | any[];

export type RadioMessageType = "error" | "valid" | "";

export type RadioSize = "sm" | "md";

export interface RadioProps {
    className?: RadioClassName;
    hint?: RadioHint;
    id?: string;
    isExtended?: boolean;
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

