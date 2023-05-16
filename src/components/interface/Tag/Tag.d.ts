import * as React from 'react';

export type TagAs = 'a' | 'span' | 'p';

export type TagChildren = string | React.ReactNode;

export type TagIconPosition = 'left' | 'right';

export interface TagProps {
  className?: string;
  as?: TagAs;
  children?: TagChildren;
  small?: boolean;
  selected?: boolean;
  closable?: boolean;
  href?: string;
  title?: string;
  target?: string;
  icon?: string;
  onClick?: undefined;
  iconPosition?: TagIconPosition;
  colorFamily?: string;
}

declare const Tag: React.FC<TagProps>;

export default Tag;
