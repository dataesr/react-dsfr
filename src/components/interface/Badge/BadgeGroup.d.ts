import * as React from 'react';

export type BadgeGroupClassName = string | Object | any[];

export type BadgeGroupChildren = React.ReactNode[] | React.ReactNode;

export interface BadgeGroupProps {
  className?: BadgeGroupClassName;
  children?: BadgeGroupChildren;
}

declare const BadgeGroup: React.FC<BadgeGroupProps>;

export default BadgeGroup;
