import { render, screen, within } from '@testing-library/react';
import Pagination from '..';

describe('<Pagination />', () => {
  it('should render pagination properly', () => {
    render(
      <Pagination buildURL={(page) => `page${page}`} currentPage={8} pageCount={15} />,
    );
    const pagination = screen.getByTestId('pagination-nav');
    expect(pagination.className).toBe('rf-pagination');
    const pages = screen.getByRole('list');
    const { getAllByRole } = within(pages);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(13);
    expect(pagination).toMatchSnapshot();
  });
});
