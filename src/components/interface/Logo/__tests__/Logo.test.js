import { render, screen } from '@testing-library/react';
import Logo from '..';

describe('<Logo />', () => {
  it('should render Logo properly', () => {
    render(
      <Logo>
        Ministère |de l&apos;enseignement |supérieur de la |rechercher  et de |l&apos;innovation
      </Logo>,
    );
    const footer = screen.getByText(/Ministère/);
    expect(footer).toMatchSnapshot();
  });
});
