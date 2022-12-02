import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { v4 as uuidv4 } from 'uuid';
import {
  NavItem, NavSubItem,
} from '../index';
import HeaderContext from '../headerContext';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('uuid', () => ({
  v4: jest.fn(),
}));

describe('<NavItem />', () => {
  beforeEach(() => {
    uuidv4.mockImplementationOnce(() => 'xyx');
  });
  it('renders correctly', () => {
    const component = renderer
      .create(
        <NavItem title="title" link="link" />,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('should render simple header', () => {
    mount(<NavItem
      title="title"
      link="link"
    />);
  });

  it('should manage NavSubItem', () => {
    const component = mount(
      <NavItem
        title="title"
        link="link"
      >
        <NavSubItem title="Ressource #1" link="/path-to-resources-1" />
      </NavItem>,
    );
    expect(component.find('button').text()).toBe('title');
    component.find('[type="button"]').simulate('click');
    expect(component.find('.fr-collapse--expanded').exists()).toBeTruthy();
  });

  it('should trigger onClick action', () => {
    const fn = jest.fn();
    const mockOnOpenNav = jest.fn();
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const ctx = { onOpenNav: mockOnOpenNav };
    const component = mount(
      <HeaderContext.Provider value={ctx}>
        <NavItem
          title="title"
          onClick={fn}
        />
      </HeaderContext.Provider>,
    );
    expect(component.find('a').text()).toBe('title');
    component.find('a').simulate('click');
    expect(mockOnOpenNav).toBeCalledWith(false);
    expect(fn).toBeCalled();
  });
});
