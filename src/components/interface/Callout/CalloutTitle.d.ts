import * as React from 'react';

export type CalloutTitleChildren = string | React.ReactNode;

export type CalloutTitleAs = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type CalloutTitleSize = "xs" | "sm" | "md" | "lg";

export type CalloutTitleClassName = string | Object | any[];

export interface CalloutTitleProps {
    children: CalloutTitleChildren;
    as?: CalloutTitleAs;
    size?: CalloutTitleSize;
    className?: CalloutTitleClassName;
}

declare const CalloutTitle: React.FC<CalloutTitleProps>;

export default CalloutTitle;

