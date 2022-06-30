import { render, screen, within } from '@testing-library/react';
import { SkiplinkItem, Skiplinks } from '..';

describe('<SkipLinks />', () => {
  it('should renders SkipLinks properly', () => {
    render(
      <Skiplinks data-testid="skiplinks">
        <SkiplinkItem href="#" data-testid="skiplinkitem1">Accéder au contenu</SkiplinkItem>
        <SkiplinkItem href="#" data-test-id="skiplinkitem2">Accéder au menu</SkiplinkItem>
        <SkiplinkItem href="#" data-test--id="skiplinkitem3">Accéder à la recherche</SkiplinkItem>
        <SkiplinkItem href="#" data-test="skiplinkitem4">Accéder au footer</SkiplinkItem>
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
