import * as React from 'react';

export type CalloutTextChildren = string | React.ReactNode;

export type CalloutTextClassName = string | Object | any[];

export type CalloutTextSize = "xs" | "sm" | "md" | "lg" | "xl";

export type CalloutTextAs = "p" | "ul" | "div";

export interface CalloutTextProps {
    children: CalloutTextChildren;
    className?: CalloutTextClassName;
    size?: CalloutTextSize;
    as?: CalloutTextAs;
}

declare const CalloutText: React.FC<CalloutTextProps>;

export default CalloutText;

