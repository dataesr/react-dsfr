import { render, screen, fireEvent } from '@testing-library/react';
<<<<<<< HEAD:src/components/Modal/__tests__/Modal.test.js
import Modal from '..';
import Button from '../../Button';

describe('<Modal />', () => {
=======
import Modal from '.';
import Button from '../Button';

describe('Modal tests', () => {
>>>>>>> cec1a96be7f65d0d42434951a84e243add73d9e3:src/components/Modal/Modal.test.js
  it('should render modal properly', () => {
    const hide = jest.fn();
    render(
      <Modal hide={hide}>
        <Modal.Close hide={hide} title="Close the modal window">Close</Modal.Close>
<<<<<<< HEAD:src/components/Modal/__tests__/Modal.test.js
        <Modal.Title icon>I&apos;m a title</Modal.Title>
        <Modal.Content>blah blah</Modal.Content>
        <Modal.Footer>
          <Button title="Une action">blah</Button>
=======
        <Modal.Title icon>I am a title</Modal.Title>
        <Modal.Content>blah blah</Modal.Content>
        <Modal.Footer>
          blah
>>>>>>> cec1a96be7f65d0d42434951a84e243add73d9e3:src/components/Modal/Modal.test.js
        </Modal.Footer>
      </Modal>,
    );
    const modal = screen.getByTestId('modal');
<<<<<<< HEAD:src/components/Modal/__tests__/Modal.test.js
    const title = screen.getByText("I'm a title");
=======
    const title = screen.getByText('I am a title');
>>>>>>> cec1a96be7f65d0d42434951a84e243add73d9e3:src/components/Modal/Modal.test.js
    const content = screen.getByText('blah blah');
    const footer = screen.getByText('blah');
    const close = screen.getByText('Close');
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
      <Modal hide={hide}>
        <Modal.Close hide={hide} title="Close the modal window">Close</Modal.Close>
<<<<<<< HEAD:src/components/Modal/__tests__/Modal.test.js
        <Modal.Title icon>I&apos;m a title</Modal.Title>
        <Modal.Content>blah blah</Modal.Content>
        <Modal.Footer>
          <Button title="Une action">blah</Button>
=======
        <Modal.Title icon>I am a title</Modal.Title>
        <Modal.Content>blah blah</Modal.Content>
        <Modal.Footer>
          <Button title="blah" />
>>>>>>> cec1a96be7f65d0d42434951a84e243add73d9e3:src/components/Modal/Modal.test.js
        </Modal.Footer>
      </Modal>,
    );
    const close = screen.getByText('Close');
    fireEvent.click(close);
    expect(hide).toHaveBeenCalledTimes(1);
  });

  it('should close modal on dialog click', () => {
    const hide = jest.fn();
    render(
      <Modal hide={hide}>
        <Modal.Close hide={hide} title="Close the modal window">Close</Modal.Close>
<<<<<<< HEAD:src/components/Modal/__tests__/Modal.test.js
        <Modal.Title icon>I&apos;m a title</Modal.Title>
        <Modal.Content>blah blah</Modal.Content>
        <Modal.Footer>
          <Button title="Une action">blah</Button>
=======
        <Modal.Title icon>I am a title</Modal.Title>
        <Modal.Content>blah blah</Modal.Content>
        <Modal.Footer>
          <Button title="blah" />
>>>>>>> cec1a96be7f65d0d42434951a84e243add73d9e3:src/components/Modal/Modal.test.js
        </Modal.Footer>
      </Modal>,
    );
    const close = screen.getByText('Close');
    fireEvent.click(close);
    expect(hide).toHaveBeenCalledTimes(1);
  });
});
