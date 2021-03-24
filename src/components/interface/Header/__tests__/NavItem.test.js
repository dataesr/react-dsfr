import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { v4 as uuidv4 } from 'uuid';
import {
  NavItem, NavSubItem,
} from '../index';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('uuid', () => ({
  v4: jest.fn(),
}));

describe('<NavItem />', () => {
  let wrapper;

  const initialProps = {
    title: 'title',
    link: 'link',
    children: 'child',
  };

  beforeEach(() => {
    uuidv4.mockImplementationOnce(() => 'xyx');
    wrapper = (props = {}, children) => shallow(
      <NavItem
        title={props.title}
        link={props.link}
      >
        {children || props.children}
      </NavItem>,
    );
  });
  it('renders correctly', () => {
    const component = renderer
      .create(
        <NavItem title="title" link="link" />,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('should have button with title as text', () => {
    const component = wrapper(initialProps);
    expect(component.find('button').text()).toBe(initialProps.title);
  });

  it('should', () => {
    const children = <NavSubItem title="Ressource #1" link="/path-to-resources-1" />;
    const component = wrapper(initialProps, children);
    component.find('[type="button"]').simulate('click');
    expect(component.find('.rf-collapse--expanded').exists()).toBeTruthy();
  });
});
