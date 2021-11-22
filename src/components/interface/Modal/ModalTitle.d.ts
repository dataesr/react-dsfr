import * as React from 'react';

export type ModalTitleChildren = string | React.ReactNode;

export type ModalTitleClassName = string | Object | any[];

export interface ModalTitleProps {
    __TYPE?: any;
    children: ModalTitleChildren;
    icon?: string;
    className?: ModalTitleClassName;
}

declare const ModalTitle: React.FC<ModalTitleProps>;

export default ModalTitle;

