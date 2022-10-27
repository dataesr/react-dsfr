import * as React from 'react';

export type ModalTitleChildren = string | React.ReactNode;

export interface ModalTitleProps {
  __TYPE?: any;
  children: ModalTitleChildren;
  icon?: string;
  className?: string;
}

declare const ModalTitle: React.FC<ModalTitleProps>;

export default ModalTitle;
