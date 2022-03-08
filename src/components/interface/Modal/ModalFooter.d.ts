import * as React from 'react';

export type ModalFooterChildren = React.ReactNode[] | React.ReactNode | string;

export type ModalFooterClassName = string | Object | any[];

export interface ModalFooterProps {
    __TYPE?: any;
    children: ModalFooterChildren;
    className?: ModalFooterClassName;
}

declare const ModalFooter: React.FC<ModalFooterProps>;

export default ModalFooter;

