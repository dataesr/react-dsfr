import * as React from 'react';

export type TileChildren = React.ReactNode[] | React.ReactNode;

export interface TileProps {
  className?: string;
  /**
     * Source of the image — size is fixed 80x80
     */
  horizontal?: boolean;
  color?: string;
  verticalMedium?: boolean;
  horizontalMedium?: boolean;
  /**
     * One of: node, arrayOf(node), string
     */
  children: TileChildren;
  onClick?: (...args: any[])=>any;
  ariaLabel?: string;
}

declare const Tile: React.FC<TileProps>;

export default Tile;
