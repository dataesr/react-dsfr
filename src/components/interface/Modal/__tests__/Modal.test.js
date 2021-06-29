import { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  Modal, ModalTitle, ModalContent, ModalFooter, ModalClose,
} from '..';
import { Button } from '../../Button';

describe('<Modal />', () => {
  it('should render modal properly', () => {
    const hide = jest.fn();
    render(
      <Modal isOpen hide={hide} data-testid="modal">
        <ModalClose title="Close the modal window" data-testid="modalclose">Close</ModalClose>
        <ModalTitle icon="ri-arrow-right-line" data-testid="modaltitle">I am a title</ModalTitle>
        <ModalContent data-testid="modalcontent">blah blah</ModalContent>
        <ModalFooter data-testid="modalfooter">
          blah
        </ModalFooter>
      </Modal>,
    );
    const modal = screen.getByTestId('modal');
    const title = screen.getByText('I am a title');
    const content = screen.getByText('blah blah');
    const footer = screen.getByText('blah');
    const close = screen.getByTestId('modalclose');
    expect(modal).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
    expect(close).toBeInTheDocument();
    expect(modal).toMatchSnapshot();
  });
  it('should close modal on dialog click', () => {
    jest.useFakeTimers();
    const hide = jest.fn();
    render(
      <Modal isOpen hide={hide} data-testid="modal">
        <ModalClose title="Close the modal window">Close</ModalClose>
        <ModalTitle icon="ri-arrow-right-line">I am a title</ModalTitle>
        <ModalContent>blah blah</ModalContent>
        <ModalFooter>
          <Button title="blah" />
        </ModalFooter>
      </Modal>,
    );
    const modal = screen.getByTestId('modal');
    fireEvent.click(modal);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 300);
  });

  it('should disable overflow hidden when closing modal manually', async () => {
    const FullModal = () => {
      const [isOpen, setIsOpen] = useState(false);
      return (
        <>
          <Button
            title="force action modal"
            onClick={() => setIsOpen(true)}
            data-testid="open-modal-button"

          >
            Force action modal
          </Button>
          <Modal isOpen={isOpen} hide={() => setIsOpen(false)} canClose={false}>
            <ModalTitle icon="ri-arrow-right-fill">I am a title</ModalTitle>
            <ModalContent>blah blah</ModalContent>
            <ModalFooter>
              <Button
                data-testid="close-modal-button"
                title="Une action"
                onClick={() => setIsOpen(false)}
              >
                blah
              </Button>
            </ModalFooter>
          </Modal>
        </>
      );
    };

    render(<FullModal />);

    expect(document.body.style.overflow).toBe('');
    screen.getByTestId('open-modal-button').click();
    expect(document.body.style.overflow).toBe('hidden');
    screen.getByTestId('close-modal-button').click();

    // not ideal, but we need to wait for the component to unmount :/
    jest.useRealTimers();
    await new Promise((resolve) => setTimeout(resolve, 500));
    expect(document.body.style.overflow).toBe('');
  });
});
