import { render, screen } from '@testing-library/react';
import BrandLogo from '..';

describe('<BrandLogo />', () => {
  it('should render BrandLogo properly', () => {
    render(
      <BrandLogo>
        Ministère de l&apos;enseignement supérieur de la rechercher  et de l&apos;innovation
      </BrandLogo>,
    );
    const footer = screen.getByText(/Ministère/);
    expect(footer).toMatchSnapshot();
  });
});
