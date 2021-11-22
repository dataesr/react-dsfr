import * as React from 'react';

export type MegaNavSubItemChildren = React.ReactElement<any> | React.ReactNode;

export interface MegaNavSubItemProps {
    title?: string;
    link?: string;
    children: MegaNavSubItemChildren;
}

declare const MegaNavSubItem: React.FC<MegaNavSubItemProps>;

export default MegaNavSubItem;

