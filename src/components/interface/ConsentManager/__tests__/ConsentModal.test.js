import React from 'react';
import { render, screen } from '@testing-library/react';

import ConsentModal from '../ConsentModal';

describe('<ConsentModal />', () => {
  it('should render ConsentModal properly', () => {
    render(
      <ConsentModal
        confirmConsent={jest.fn()}
        confirmButtonLabel="Confirm"
        confirmButtonTitle="Confirm Title"
        title="Title"
        closeLabel="Close"
        closeTitle="Close"
        isOpen
        setIsOpen={jest.fn()}
        data-testid="modal"
      >
        <p>Content Consent Modal</p>
      </ConsentModal>,
    );
    const modal = screen.getByTestId('modal');
    expect(modal).toMatchSnapshot();
  });
});
