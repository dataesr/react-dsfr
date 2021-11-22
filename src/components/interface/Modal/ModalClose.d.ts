import * as React from 'react';

export type ModalCloseChildren = string | React.ReactNode;

export type ModalCloseClassName = string | Object | any[];

export interface ModalCloseProps {
    __TYPE?: any;
    children?: ModalCloseChildren;
    title?: string;
    /**
     * @ignore
     */
    hide?: (...args: any[])=>any;
    className?: ModalCloseClassName;
}

declare const ModalClose: React.FC<ModalCloseProps>;

export default ModalClose;

