import * as React from 'react';

export type ModalChildren = React.ReactNode[] | React.ReactNode;

export type ModalSize = "sm" | "md" | "lg";

export type ModalClassName = string | Object | any[];

export interface ModalProps {
    id?: string;
    isOpen?: boolean;
    children: ModalChildren;
    hide: (...args: any[])=>any;
    size?: ModalSize;
    className?: ModalClassName;
    canClose?: boolean;
}

declare const Modal: React.FC<ModalProps>;

export default Modal;

