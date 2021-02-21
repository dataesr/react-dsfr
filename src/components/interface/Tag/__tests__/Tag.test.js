import { render, screen } from '@testing-library/react';
import Tag from '../index';

test('renders Tag', () => {
  render(<Tag as="a" href="/" title="titre">tag-test</Tag>);
  const tag = screen.getByText(/tag-test/i);
  expect(tag).toBeInTheDocument();
});
