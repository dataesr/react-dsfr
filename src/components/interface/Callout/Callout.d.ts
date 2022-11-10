import * as React from 'react';

export type CalloutColorFamily = 'green-tilleul-verveine' | 'green-bourgeon' | 'green-emeraude' | 'green-menthe' | 'green-archipel' | 'blue-ecume' | 'blue-cumulus' | 'purple-glycine' | 'pink-macaron' | 'pink-tuile' | 'yellow-tournesol' | 'yellow-moutarde' | 'orange-terre-battue' | 'brown-cafe-creme' | 'brown-caramel' | 'brown-opera' | 'beige-gris-galet' | '';

export type CalloutChildren = React.ReactNode[] | React.ReactNode;

export interface CalloutProps {
  hasInfoIcon?: boolean;
  colorFamily?: CalloutColorFamily;
  /**
     * first color is color of the border, second is background
     * be careful with contrast
     */
  colors?: string[];
  children: CalloutChildren;
  className?: string;
}

declare const Callout: React.FC<CalloutProps>;

export default Callout;
