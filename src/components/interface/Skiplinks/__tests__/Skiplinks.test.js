import { render, screen, within } from '@testing-library/react';
import { SkiplinkItem, Skiplinks } from '..';

describe('<SkipLinks />', () => {
  it('should renders Tag properly', () => {
    render(
      <Skiplinks>
        <SkiplinkItem href="#">Accéder au contenu</SkiplinkItem>
        <SkiplinkItem href="#">Accéder au menu</SkiplinkItem>
        <SkiplinkItem href="#">Accéder à la recherche</SkiplinkItem>
        <SkiplinkItem href="#">Accéder au footer</SkiplinkItem>
      </Skiplinks>,
    );
    const skiplinks = screen.getByTestId('skiplinks');
    expect(skiplinks).toBeInTheDocument();
    expect(skiplinks).toMatchSnapshot();
    const links = screen.getByRole('list');
    const { getAllByRole } = within(links);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(4);
  });
});
