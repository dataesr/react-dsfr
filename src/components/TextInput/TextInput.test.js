import { render, screen } from '@testing-library/react';
import TextInput from '.';

it('renders TextInput properly', () => {
  render(
    <TextInput
      value="Value"
      onChange={(e) => (e.target.value)}
      label="Text input du gouvernement"
    />,
  );
  const input = screen.getByDisplayValue('Value');
  expect(input).toBeInTheDocument();
  expect(input.value).toBe('Value');
});
