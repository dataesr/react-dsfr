import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import TitleAlt from '../TitleAlt';

const initialProps = {
  as: 'h2',
  size: 'xl',
  children: 'Title Alt xl',
};

describe('<TitleAlt />', () => {
  it('renders correctly', () => {
    const component = renderer
      .create(<TitleAlt {...initialProps}>{initialProps.children}</TitleAlt>)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
