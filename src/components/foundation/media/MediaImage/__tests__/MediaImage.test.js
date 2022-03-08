import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import MediaImage from '../index';

describe('<MediaImage />', () => {
  it('renders correctly', () => {
    const component = renderer
      .create(
        <MediaImage
          data-testid="image"
          src="https://dummyimage.com/300x170/000/fff.png"
        />,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('in document', () => {
    render(
      <MediaImage
        data-testid="image"
        src="https://dummyimage.com/300x170/000/fff.png"
      />,
    );
    const search = screen.getByTestId('image');
    expect(search).toBeInTheDocument();
  });
});
