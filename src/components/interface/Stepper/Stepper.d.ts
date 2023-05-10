import * as React from 'react';

export type TitleAs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface StepperProps {
  className?: string;
  currentStep: number;
  currentTitle: string,
  nextStepTitle: string,
  steps: number;
  titleAs?: TitleAs;
}

declare const Stepper: React.FC<StepperProps>;

export default Stepper;
