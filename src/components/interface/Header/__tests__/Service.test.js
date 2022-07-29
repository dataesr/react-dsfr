import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import {
  Service,
} from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('<Service />', () => {
  it('renders correctly', () => {
    const component = renderer
      .create(
        <Service
          title="title"
          description="description service"
        />,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
