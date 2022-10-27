import * as React from 'react';

export interface ToggleProps {
  onChange?: (...args: any[])=>any;
  id?: string;
  className?: string;
  hasSeparator?: boolean;
  hasLabelLeft?: boolean;
  checked?: boolean;
  description?: string;
  label: string;
  toggleColor?: string;
}

declare const Toggle: React.FC<ToggleProps>;

export default Toggle;
