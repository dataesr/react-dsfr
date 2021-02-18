import { render, screen } from '@testing-library/react';
import Tag from '..';

test('renders Button', () => {
  render(<Tag as="a" href="/" title="titre">Valeur du tag</Tag>);
  const tag = screen.getByText(/Valeur/i);
  expect(tag).toBeInTheDocument();
});
