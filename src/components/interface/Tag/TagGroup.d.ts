import * as React from 'react';

export interface TagGroupProps {
  className?: string;
  children: React.ReactNode;
}

declare const TagGroup: React.FC<TagGroupProps>;

export default TagGroup;
