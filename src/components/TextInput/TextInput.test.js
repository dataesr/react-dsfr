import { useState } from 'react';
import { render, screen } from '@testing-library/react';
import TextInput from '.'

it('renders TextInput properly', () => {
  const [value, setValue] = useState('');
  render(
    <TextInput
      value={value}
      onChange={e => setValue(e.target.value)}
      label="Text input du gouvernement"
    />
  );
  const label = screen.getByText(/Text input du gouvernement/i);
  expect(label).toBeInTheDocument();
});
