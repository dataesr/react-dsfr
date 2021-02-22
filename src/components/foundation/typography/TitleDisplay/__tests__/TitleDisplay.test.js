import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import TitleDisplay from '../TitleDisplay';

const initialProps = {
  as: 'h2',
  size: 'xl',
  children: 'Title Alt xl',
};

describe('<TitleDisplay />', () => {
  it('renders correctly', () => {
    const component = renderer
      .create(<TitleDisplay {...initialProps}>{initialProps.children}</TitleDisplay>)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
