import React from 'react';

import { Stepper } from '@dataesr/react-dsfr';

const StepperExample = () => (
  <Stepper currentStep={2} steps={8} currentTitle="Current step title" nextStepTitle="Next step Title" />
);

export default StepperExample;
