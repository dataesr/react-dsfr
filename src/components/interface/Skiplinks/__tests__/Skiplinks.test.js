import { render, screen, within } from '@testing-library/react';
import { Skiplinks, Skiplink } from '..';

describe('<SkipLinks />', () => {
  it('should renders Tag properly', () => {
    render(
      <Skiplinks>
        <Skiplink href="#">Accéder au contenu</Skiplink>
        <Skiplink href="#">Accéder au menu</Skiplink>
        <Skiplink href="#">Accéder à la recherche</Skiplink>
        <Skiplink href="#">Accéder au footer</Skiplink>
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
