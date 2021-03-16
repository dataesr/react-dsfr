import renderer from 'react-test-renderer';
import {
  Brand,
} from '../index';

describe('<Brand />', () => {
  it('renders correctly', () => {
    const component = renderer
      .create(
        <Brand
          title="title"
          linkTitle="République française"
        />,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
