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
    icon: 'fr-fi-home',
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
          setHeight={initProps.setHeight}
          data-testid="tab"
        >
          {initProps.children}
        </Tab>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('has --selected class', () => {
    const component = wrapper({ ...initProps });
    expect(component.find('.fr-tabs__panel').hasClass('fr-tabs__panel--selected')).toBeTruthy();
  });
});
