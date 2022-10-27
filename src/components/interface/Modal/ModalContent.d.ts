import * as React from 'react';

export type ModalContentChildren = React.ReactNode[] | React.ReactNode | string;

export interface ModalContentProps {
  __TYPE?: any;
  children: ModalContentChildren;
  className?: string;
}

declare const ModalContent: React.FC<ModalContentProps>;

export default ModalContent;
