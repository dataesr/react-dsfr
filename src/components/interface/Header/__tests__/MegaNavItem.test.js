import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { v4 as uuidv4 } from 'uuid';
import { MegaNavItem } from '../index';
import MegaNavSubItem from '../MegaNavSubItem';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('uuid', () => ({
  v4: jest.fn(),
}));

describe('<MegaNavItem />', () => {
  let wrapper;

  const initialProps = {
    title: 'title',
    link: 'link',
    linkLabel: 'label',
    current: false,
    as: 'h6',
    description: 'description',
    closeButtonLabel: 'close',
  };

  beforeEach(() => {
    uuidv4.mockImplementationOnce(() => 'xyx');
    wrapper = (props = {}) => shallow(
      <MegaNavItem
        {...props}
      />,
    );
  });
  it('renders correctly', () => {
    const component = renderer
      .create(
        <MegaNavItem {...initialProps}>
          <MegaNavSubItem><p>Test</p></MegaNavSubItem>
        </MegaNavItem>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('should have button with title as text', () => {
    const component = wrapper(initialProps);
    expect(component.find('.fr-nav__item > button').text()).toBe(initialProps.title);
  });

  it('should expand', () => {
    const component = wrapper(initialProps);
    component.find('.fr-nav__item > button').simulate('click');
    expect(component.find('.fr-collapse--expanded').exists()).toBeTruthy();
  });
});
