import * as React from 'react';

export type ButtonIconPosition = 'left' | 'right';

export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonChildren = string | React.ReactNode;

export interface ButtonProps {
  secondary?: boolean;
  tertiary?: boolean;
  hasBorder?: boolean;
  icon?: string;
  disabled?: boolean;
  onClick?: (...args: any[])=>any;
  iconPosition?: ButtonIconPosition;
  title?: string;
  className?: string;
  size?: ButtonSize;
  children?: ButtonChildren;
  submit?: boolean;
  /**
     * colors[0] is background, colors[1] is color
     */
  colors?: string[];
}

declare const Button: React.FC<ButtonProps>;

export default Button;
