import { render, screen, fireEvent } from '@testing-library/react';
import {
  Modal, ModalTitle, ModalContent, ModalFooter, ModalClose,
} from '..';
import Button from '../../Button';

describe('<Modal />', () => {
  it('should render modal properly', () => {
    const hide = jest.fn();
    render(
      <Modal isOpen hide={hide}>
        <ModalClose title="Close the modal window">Close</ModalClose>
        <ModalTitle icon="ri-arrow-right-line">I am a title</ModalTitle>
        <ModalContent>blah blah</ModalContent>
        <ModalFooter>
          blah
        </ModalFooter>
      </Modal>,
    );
    const modal = screen.getByTestId('modal');
    const title = screen.getByText('I am a title');
    const content = screen.getByText('blah blah');
    const footer = screen.getByText('blah');
    const close = screen.getByTestId('modal-close');
    expect(modal).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
    expect(close).toBeInTheDocument();
    expect(modal).toMatchSnapshot();
  });

  it('should close modal on dialog click', async () => {
    jest.useFakeTimers();
    const hide = jest.fn();
    render(
      <Modal isOpen hide={hide}>
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
});
