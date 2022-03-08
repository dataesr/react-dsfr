import * as React from 'react';

export type HeaderOperatorChildren = React.ReactNode[] | React.ReactNode;

export interface HeaderOperatorProps {
    __TYPE?: any;
    children: HeaderOperatorChildren;
}

declare const HeaderOperator: React.FC<HeaderOperatorProps>;

export default HeaderOperator;

