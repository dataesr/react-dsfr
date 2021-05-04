import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import TabButton from '../TabButton';

Enzyme.configure({ adapter: new Adapter() });

describe('<TabButton />', () => {
  const initProps = {
    className: 'my-class',
    index: 0,
  };
  let wrapper;
  const mockSetActiveTab = jest.fn();

  beforeEach(() => {
    wrapper = () => shallow(
      <TabButton
        activeTab={0}
        setActiveTab={mockSetActiveTab}
        index={0}
        label="Label #1"
        className={initProps.className}
      />,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render TabButton properly', () => {
    const component = renderer
      .create(
        <TabButton
          activeTab={0}
          setActiveTab={mockSetActiveTab}
          index={0}
          label="Label #1"
          className={initProps.className}
        />,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('onClick setActiveTab', () => {
    const component = wrapper({ ...initProps });
    component.find('li').simulate('click');
    expect(mockSetActiveTab).toHaveBeenCalledWith(initProps.index);
  });
});
