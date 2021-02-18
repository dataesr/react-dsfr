import '@testing-library/jest-dom';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { v4 as uuidv4 } from 'uuid';
import Accordion from './Accordion';

jest.mock('uuid', () => ({
  v4: jest.fn(),
}));

Enzyme.configure({ adapter: new Adapter() });

const initialProps = {
  group: [{ title: 'title', children: 'content line' }],
  children: 'Title',
};

describe('<Accordion />', () => {
  let wrapper;

  beforeEach(() => {
    uuidv4.mockImplementationOnce(() => 'xxxxxxx');
    wrapper = (props = {}) => shallow(
      <Accordion group={props.group}>
        {props.children}
      </Accordion>,
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders correctly', () => {
    const component = renderer
      .create(
        <Accordion
          group={initialProps.group}
        >
          {initialProps.children}
        </Accordion>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('renders Accordion', () => {
    const props = {
      group: [{ title: 'title', children: 'test children' }],
      children: 'Title Group',
    };

    const component = wrapper({ ...props });
    expect(component.find('.rf-accordions-group')).toHaveLength(1);
  });
});
