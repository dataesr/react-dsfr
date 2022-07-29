import Enzyme from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import React from 'react';
import Stepper from '../Stepper';

Enzyme.configure({ adapter: new Adapter() });

const initialProps = {
  currentStepTitle: 'TiTle',
  nextStepTitle: 'TiTle next',
  steps: 6,
  currentStep: 5,
};

describe('<Stepper />', () => {
  it('renders correctly', () => {
    const component = renderer
      .create(
        <Stepper
          currentStep={initialProps.currentStep}
          steps={initialProps.steps}
          currentTitle={initialProps.currentStepTitle}
          nextStepTitle={initialProps.nextStepTitle}
        />,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
