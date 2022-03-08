import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
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
