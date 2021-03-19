import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Tab } from '..';

Enzyme.configure({ adapter: new Adapter() });

describe('<Tab />', () => {
  const initProps = {
    className: 'my-class',
    children: 'Tabinouze',
    index: 0,
    setActiveTab: () => {},
    activeTab: 0,
    setHeight: () => {},
    icon: 'rf-fi-home',
    iconPosition: 'right',
    label: 'Label',
  };
  let wrapper;

  beforeEach(() => {
    wrapper = (props = {}) => mount(
      <Tab
        {...props}
      >
        {props.children}
      </Tab>,
    );
  });

  it('renders Tab correctly', () => {
    const component = renderer
      .create(
        <Tab
          label={initProps.label}
          className={initProps.className}
          index={initProps.index}
          icon={initProps.icon}
          activeTab={initProps.activeTab}
          iconPosition={initProps.iconPosition}
          setActiveTab={initProps.setActiveTab}
          setHeight={initProps.setHeight}
        >
          {initProps.children}
        </Tab>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('has --selected class', () => {
    const component = wrapper({ ...initProps });
    expect(component.find('.rf-tabs__panel').hasClass('rf-tabs__panel--selected')).toBeTruthy();
  });

  test('onClick setActiveTab', () => {
    const mockSetActiveTab = jest.fn();
    const component = wrapper({ ...initProps, setActiveTab: mockSetActiveTab });
    component.find('button').simulate('click');
    expect(mockSetActiveTab).toHaveBeenCalledWith(initProps.index);
  });

  test('on load setHeight', () => {
    const mockSetHeight = jest.fn();
    wrapper({ ...initProps, setHeight: mockSetHeight });
    expect(mockSetHeight).toHaveBeenCalled();
  });
});
