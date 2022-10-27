import * as React from 'react';

export type StepperClassName = string | Object | any[];

export type TitleAs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface StepperProps {
  steps: number;
  currentStep: number;
  className?: StepperClassName;
  titleAs?: TitleAs;
}

declare const Stepper: React.FC<StepperProps>;

export default Stepper;
