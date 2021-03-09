import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '../index';
import Button from '../../Button';

describe('<Modal />', () => {
  it('should render modal properly', () => {
    const hide = jest.fn();
    render(
      <Modal isOpen hide={hide}>
        <Modal.Close hide={hide} title="Close the modal window">Close</Modal.Close>
        <Modal.Title icon>I am a title</Modal.Title>
        <Modal.Content>blah blah</Modal.Content>
        <Modal.Footer>
          blah
        </Modal.Footer>
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

  it('should close modal on Close button click', () => {
    const hide = jest.fn();
    render(
      <Modal isOpen hide={hide}>
        <Modal.Close hide={hide} title="Close the modal window">Close</Modal.Close>
        <Modal.Title icon>I am a title</Modal.Title>
        <Modal.Content>blah blah</Modal.Content>
        <Modal.Footer>
          <Button title="blah" />
        </Modal.Footer>
      </Modal>,
    );
    const close = screen.getByTestId('modal-close');
    fireEvent.click(close);
    expect(hide).toHaveBeenCalledTimes(1);
  });

  it('should close modal on dialog click', async () => {
    jest.useFakeTimers();
    const hide = jest.fn();
    render(
      <Modal isOpen hide={hide}>
        <Modal.Close hide={hide} title="Close the modal window">Close</Modal.Close>
        <Modal.Title icon>I am a title</Modal.Title>
        <Modal.Content>blah blah</Modal.Content>
        <Modal.Footer>
          <Button title="blah" />
        </Modal.Footer>
      </Modal>,
    );
    const modal = screen.getByTestId('modal');
    expect(setTimeout).toHaveBeenCalledTimes(1);
    fireEvent.click(modal);
    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 300);
  });
});
