import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Title from '../Title';

const initialProps = {
  as: 'h2',
  look: 'h4',
  children: 'Title',
};

describe('<Title />', () => {
  it('renders correctly', () => {
    const component = renderer
      .create(<Title {...initialProps}>{initialProps.children}</Title>)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
