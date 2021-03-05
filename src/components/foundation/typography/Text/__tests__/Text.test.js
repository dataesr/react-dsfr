import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Text from '../Text';

const initialProps = {
  as: 'span',
  size: 'sm',
  alt: true,
  children: 'Text',
};

describe('<Text />', () => {
  it('renders correctly', () => {
    const component = renderer
      .create(<Text {...initialProps}>{initialProps.children}</Text>)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
