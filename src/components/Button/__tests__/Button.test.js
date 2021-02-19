import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../Button';

Enzyme.configure({ adapter: new Adapter() });

const initialProps = {
  size: 'lg',
  title: 'title',
  icon: 'alert-fill',
  secondary: true,
  children: 'test button',
};

describe('<Button />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = (props = {}) => shallow(
      <Button
        size={props.size}
        title={props.title}
        onClick={props.onClick}
      >
        {props.children}
      </Button>,
    );
  });

  it('renders correctly', () => {
    const component = renderer
      .create(
        <Button
          icon={initialProps.icon}
          secondary={initialProps.secondary}
          size={initialProps.size}
          title={initialProps.title}
        >
          {initialProps.children}
        </Button>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('renders small Button', () => {
    const props = {
      size: 'sm',
      title: 'title',
      children: 'basic sm button',
    };

    const component = wrapper({ ...props });
    expect(component.find('button').text()).toBe('basic sm button');
  });

  test('onClick Button', () => {
    const mockClick = jest.fn();
    const props = {
      size: 'sm',
      title: 'title',
      children: 'basic sm button',
      onClick: mockClick,
    };

    const component = wrapper({ ...props });
    component.find('button').simulate('click');
    expect(mockClick).toHaveBeenCalled();
  });
});
