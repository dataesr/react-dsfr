import React from 'react';
import { render, screen } from '@testing-library/react';

import {
  Modal, ModalClose, ModalContent, ModalTitle,
} from '../../Modal';
import { Button } from '../../Button';

describe('<ConsentModal />', () => {
  it('should render ConsentModal properly', () => {
    render(
      <Modal
        data-testid="modal"
        isOpen
        hide={() => jest.fn()}
        id="fr-consent-modal"
        aria-labelledby="fr-consent-modal-title"
      >
        <ModalClose
          hide={jest.fn()}
          title="Close Title"
        >
          Close Label
        </ModalClose>
        <ModalTitle>Title Modal Consent</ModalTitle>
        <ModalContent>
          {null}
          <ul className="fr-consent-manager__buttons fr-btns-group fr-btns-group--right fr-btns-group--inline-sm">
            <li>
              <Button
                title="Button Title"
                onClick={jest.fn()}
              >
                Confirm Label
              </Button>
            </li>
          </ul>
        </ModalContent>
      </Modal>,
    );
    const modal = screen.getByTestId('modal');
    expect(modal).toMatchSnapshot();
  });
});
