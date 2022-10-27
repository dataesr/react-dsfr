import * as React from 'react';

export type ModalFooterChildren = React.ReactNode[] | React.ReactNode | string;

export interface ModalFooterProps {
  __TYPE?: any;
  children: ModalFooterChildren;
  className?: string;
}

declare const ModalFooter: React.FC<ModalFooterProps>;

export default ModalFooter;
