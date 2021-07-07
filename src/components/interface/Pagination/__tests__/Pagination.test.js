import { render, screen, within } from '@testing-library/react';
import Pagination from '..';

describe('<Pagination />', () => {
  it('should render pagination properly', () => {
    render(
      <Pagination buildURL={(page) => `page${page}`} currentPage={8} pageCount={15} data-testid="pagination" />,
    );
    const pagination = screen.getByTestId('pagination');
    expect(pagination.className).toBe('fr-pagination');
    const pages = screen.getByRole('list');
    const { getAllByRole } = within(pages);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(13);
    expect(pagination).toMatchSnapshot();
  });

  it('should render state pagination properly', () => {
    render(
      <Pagination onClick={() => {}} currentPage={8} pageCount={15} data-testid="pagination" />,
    );
    const pagination = screen.getByTestId('pagination');
    expect(pagination.className).toBe('fr-pagination');
    const pages = screen.getByRole('list');
    const { getAllByRole } = within(pages);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(13);
    expect(pagination).toMatchSnapshot();
  });
});
