import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { v4 as uuidv4 } from 'uuid';
import SearchBar from '../index';

jest.mock('uuid', () => ({
  v4: jest.fn(),
}));

describe('<SearchBar />', () => {
  beforeEach(() => {
    uuidv4.mockImplementationOnce(() => 'xxxxxxx');
  });
  it('renders SearchBar properly', () => {
    const onSearch = jest.fn();
    render(
      <SearchBar
        buttonLabel="Rechercher"
        onSearch={onSearch}
        label="SearchBar du gouvernement"
      />,
    );
    const search = screen.getByTestId('search-bar');
    expect(search).toBeInTheDocument();
    expect(search).toMatchSnapshot();
  });
  it('renders large SearchBar properly', () => {
    const onSearch = jest.fn();
    render(
      <SearchBar
        size="lg"
        buttonLabel="Rechercher"
        onSearch={onSearch}
        label="SearchBar du gouvernement"
      />,
    );
    const search = screen.getByTestId('search-bar');
    expect(search).toBeInTheDocument();
    expect(search.className).toBe('fr-search-bar fr-search-bar--lg');
    expect(screen.getByText('Rechercher').className).toBe('fr-btn fr-btn--lg');
    expect(search).toMatchSnapshot();
  });

  it('renders SearchBar input properly', () => {
    const onSearch = jest.fn();
    render(
      <SearchBar
        buttonLabel="Rechercher"
        onSearch={onSearch}
        label="SearchBar du gouvernement"
      />,
    );
    const input = screen.getByTestId('search-input');
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('');
    expect(input.type).toBe('search');
    expect(input.className).toBe('fr-input');
    expect(input.id).toBe('xxxxxxx');
  });

  it('renders label properly', () => {
    const onSearch = jest.fn();
    render(
      <SearchBar
        buttonLabel="Rechercher"
        onSearch={onSearch}
        label="SearchBar du gouvernement"
      />,
    );
    const label = screen.getByText('SearchBar du gouvernement');
    expect(label).toBeInTheDocument();
    expect(label.className).toBe('fr-label');
    expect(label.htmlFor).toBe('xxxxxxx');
  });

  it('should print search text', () => {
    const onSearch = jest.fn();
    render(
      <SearchBar
        buttonLabel="Rechercher"
        onSearch={onSearch}
        label="SearchBar"
      />,
    );
    const input = screen.getByTestId('search-input');
    expect(input.value).toBe('');
    userEvent.type(input, 'gouvernement');
    expect(input.value).toBe('gouvernement');
  });

  it('should fire onSearch on search button click', () => {
    const onSearch = jest.fn();
    render(
      <SearchBar
        buttonLabel="Rechercher"
        onSearch={onSearch}
        label="SearchBar du gouvernement"
      />,
    );
    fireEvent.click(screen.getByText('Rechercher'));
    expect(onSearch).toHaveBeenCalledTimes(1);
  });

  it('should fire onSearch on press enter', () => {
    const onSearch = jest.fn();
    render(
      <SearchBar
        buttonLabel="Rechercher"
        onSearch={onSearch}
        label="SearchBar du gouvernement"
      />,
    );
    fireEvent.keyDown(
      screen.getByTestId('search-input'),
      {
        key: 'Enter',
        code: 'Enter',
        keyCode: 13,
        keyChar: 13,
      },
    );
    expect(onSearch).toHaveBeenCalledTimes(1);
  });
});
