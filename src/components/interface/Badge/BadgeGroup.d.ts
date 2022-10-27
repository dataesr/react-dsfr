import * as React from 'react';

export type BadgeGroupChildren = React.ReactNode[] | React.ReactNode;

export interface BadgeGroupProps {
  className?: string;
  children?: BadgeGroupChildren;
}

declare const BadgeGroup: React.FC<BadgeGroupProps>;

export default BadgeGroup;
