import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import AltTitle from '../AltTitle';

const initialProps = {
  as: 'h2',
  size: 'xl',
  children: 'Title Alt xl',
};

describe('<AltTitle />', () => {
  it('renders correctly', () => {
    const component = renderer
      .create(<AltTitle {...initialProps}>{initialProps.children}</AltTitle>)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
