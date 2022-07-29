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
        data-testid="searchbar"
        defaultValue="text"
        placeholder="placeholder"
      />,
    );

    const search = screen.getByPlaceholderText('placeholder');
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
        data-testid="searchbar"
        placeholder="placeholder"
      />,
    );
    const search = screen.getByTestId('searchbar');
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
        placeholder="placeholder"
      />,
    );
    const input = screen.getByPlaceholderText('placeholder');
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
        placeholder="placeholder"
      />,
    );
    const label = screen.getByText('SearchBar du gouvernement');
    expect(label).toBeInTheDocument();
    expect(label.className).toBe('fr-label');
    expect(label.htmlFor).toBe('xxxxxxx');
  });

  it('should print search text', async () => {
    const onSearch = jest.fn();
    const user = userEvent.setup();

    render(
      <SearchBar
        buttonLabel="Rechercher"
        onSearch={onSearch}
        label="SearchBar"
        placeholder="placeholder"
      />,
    );
    const input = screen.getByPlaceholderText('placeholder');
    expect(input.value).toBe('');

    await user.type(input, 'gouvernement');
    expect(input.value).toBe('gouvernement');
  });

  it('should fire onSearch on search button click', () => {
    const onSearch = jest.fn();
    render(
      <SearchBar
        buttonLabel="Rechercher"
        onSearch={onSearch}
        label="SearchBar du gouvernement"
        placeholder="placeholder"
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
        placeholder="placeholder"
      />,
    );
    fireEvent.keyDown(
      screen.getByPlaceholderText('placeholder'),
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
