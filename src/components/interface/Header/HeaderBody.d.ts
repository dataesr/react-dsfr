import * as React from 'react';

export type HeaderBodyChildren = React.ReactNode[] | React.ReactNode | string;

export type HeaderBodyClassName = string | Object | any[];

export interface HeaderBodyProps {
    children?: HeaderBodyChildren;
    className?: HeaderBodyClassName;
    closeButtonLabel?: string;
}

declare const HeaderBody: React.FC<HeaderBodyProps>;

export default HeaderBody;

