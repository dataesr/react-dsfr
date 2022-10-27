import * as React from 'react';

export type ModalCloseChildren = string | React.ReactNode;

export interface ModalCloseProps {
  __TYPE?: any;
  children?: ModalCloseChildren;
  title?: string;
  /**
     * @ignore
     */
  hide?: (...args: any[])=>any;
  className?: string;
}

declare const ModalClose: React.FC<ModalCloseProps>;

export default ModalClose;
