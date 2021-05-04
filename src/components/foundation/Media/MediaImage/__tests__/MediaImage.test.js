import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import MediaImage from '../index';

describe('<MediaImage />', () => {
  it('renders correctly', () => {
    const component = renderer
      .create(
        <MediaImage
          src="https://bibliotheques.csdm.qc.ca/files/2018/11/10_banques_dimages_gratuites_libres_de_droits-300x169.jpg"
        />,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('in document', () => {
    render(
      <MediaImage
        src="https://bibliotheques.csdm.qc.ca/files/2018/11/10_banques_dimages_gratuites_libres_de_droits-300x169.jpg"
      />,
    );
    const search = screen.getByTestId('image');
    expect(search).toBeInTheDocument();
  });
});
