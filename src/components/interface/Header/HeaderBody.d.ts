import * as React from 'react';

export type HeaderBodyChildren = React.ReactNode[] | React.ReactNode | string;

export interface HeaderBodyProps {
  children?: HeaderBodyChildren;
  className?: string;
  closeButtonLabel?: string;
}

declare const HeaderBody: React.FC<HeaderBodyProps>;

export default HeaderBody;
