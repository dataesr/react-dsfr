import { render, screen } from '@testing-library/react';
import Button from './components/Button'

test('renders Button', () => {
  render(<Button text='button-test'/>);
  const button = screen.getByText(/button-test/i);
  expect(button).toBeInTheDocument();
});
