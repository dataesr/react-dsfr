import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Button from '../Button';

Enzyme.configure({ adapter: new Adapter() });

const initialProps = {
  size: 'lg',
  title: 'title',
  icon: 'ri-alert-fill',
  secondary: true,
  children: 'test button',
  iconPosition: 'right',
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
          id="nice-button"
          icon={initialProps.icon}
          iconPosition={initialProps.iconPosition}
          secondary={initialProps.secondary}
          size={initialProps.size}
          title={initialProps.title}
          data-testid="button"
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

  test('renders tertiary Button', () => {
    const props = {
      title: 'title',
      children: 'tertiary button',
      tertiary: true,
    };

    const component = wrapper({ ...props });
    expect(component.find('.fr-btn--tertiary')).toBeTruthy();
  });

  test('renders tertiary Button', () => {
    const props = {
      title: 'title',
      children: 'tertiary button',
      tertiary: true,
      hasBorder: false,
    };

    const component = wrapper({ ...props });
    expect(component.find('.fr-btn--tertiary-no-outline')).toBeTruthy();
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
