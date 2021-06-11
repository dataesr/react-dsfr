import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { v4 as uuidv4 } from 'uuid';
import { MegaNavItem } from '../index';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('uuid', () => ({
  v4: jest.fn(),
}));

describe('<MegaNavItem />', () => {
  let wrapper;

  const initialProps = {
    title: 'title',
    link: 'link',
    children: 'child',
    linkLabel: 'label',
    current: false,
    as: 'h6',
    description: 'description',
    closeButtonLabel: 'close',
  };

  beforeEach(() => {
    uuidv4.mockImplementationOnce(() => 'xyx');
    wrapper = (props = {}, children) => shallow(
      <MegaNavItem
        {...props}
      >
        {children || props.children}
      </MegaNavItem>,
    );
  });
  it('renders correctly', () => {
    const component = renderer
      .create(
        <MegaNavItem {...initialProps} />,
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
