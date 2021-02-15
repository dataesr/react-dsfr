import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from '.';

it('renders TextInput properly', () => {
  render(
    <SearchBar
      buttonLabel="Rechercher"
      value="Value"
      onChange={(e) => (e.target.value)}
      label="SearchBar du gouvernement"
    />,
  );
  const input = screen.getByDisplayValue('Value');
  expect(input).toBeInTheDocument();
  expect(input.value).toBe('Value');
  expect(input.type).toBe('search');
});

it('renders label properly', () => {
  render(
    <SearchBar
      buttonLabel="Rechercher"
      value="Value"
      onChange={(e) => (e.target.value)}
      label="SearchBar du gouvernement"
    />,
  );
  const label = screen.getByText('SearchBar du gouvernement');
  expect(label).toBeInTheDocument();
  expect(label.className).toBe('rf-label');
  expect(label.htmlFor).toBe('search-input');
});
