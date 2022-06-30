import * as React from 'react';

export type StepperClassName = string | Object | any[];

export interface StepperProps {
    steps: number;
    currentStep: number;
    className?: StepperClassName;
}

declare const Stepper: React.FC<StepperProps>;

export default Stepper;

