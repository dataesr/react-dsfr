import * as React from 'react';

export type TagGroupClassName = string | Object | any[];

export interface TagGroupProps {
    className?: TagGroupClassName;
    children: React.ReactNode;
}

declare const TagGroup: React.FC<TagGroupProps>;

export default TagGroup;

