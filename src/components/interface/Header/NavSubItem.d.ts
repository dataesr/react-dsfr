import * as React from 'react';

export interface NavSubItemProps {
    __TYPE?: any;
    title: string;
    link?: string;
    current?: boolean;
    asLink?: React.ReactElement<any>;
}

declare const NavSubItem: React.FC<NavSubItemProps>;

export default NavSubItem;

