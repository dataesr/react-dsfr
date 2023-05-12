import { render, screen } from '@testing-library/react';
import Logo from '..';

describe('<Logo />', () => {
  it('should render Logo properly', () => {
    render(
      <Logo data-testid="logo">
        Ministère de l&apos;enseignement supérieur et de la recherche
      </Logo>,
    );
    const footer = screen.getByText(/Ministère/);
    expect(footer).toMatchSnapshot();
  });
});
