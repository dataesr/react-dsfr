import * as React from 'react';

export type ModalContentChildren = React.ReactNode[] | React.ReactNode | string;

export type ModalContentClassName = string | Object | any[];

export interface ModalContentProps {
    __TYPE?: any;
    children: ModalContentChildren;
    className?: ModalContentClassName;
}

declare const ModalContent: React.FC<ModalContentProps>;

export default ModalContent;

