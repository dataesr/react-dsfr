import * as React from 'react';

export type HeaderChildren = React.ReactNode[] | React.ReactNode;

export type HeaderClassName = string | Object | any[];

export interface HeaderProps {
    /**
     * Ouverture de la popin de recherche en mobile
     */
    isOpenSearch?: boolean;
    /**
     * Ouverture de la popin de navigation en mobile
     */
    isOpenNav?: boolean;
    children: HeaderChildren;
    className?: HeaderClassName;
    closeButtonLabel?: string;
}

declare const Header: React.FC<HeaderProps>;

export default Header;

