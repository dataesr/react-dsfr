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
  const mockSetonClickTab = jest.fn();
  const mockSetonKeyDownTab = jest.fn();

  beforeEach(() => {
    wrapper = () => shallow(
      <TabButton
        activeTab={0}
        onClickTab={mockSetonClickTab}
        onKeyDownTab={mockSetonKeyDownTab}
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
          onClickTab={mockSetonClickTab}
          onKeyDownTab={mockSetonKeyDownTab}
          index={0}
          label="Label #1"
          className={initProps.className}
          data-testid="tabbutton"
        />,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('on onClickTab', () => {
    const component = wrapper({ ...initProps });
    component.find('button').simulate('click');
    expect(mockSetonClickTab).toHaveBeenCalledWith(initProps.index);
  });

  it('on mockSetonKeyDownTab', () => {
    const component = wrapper({ ...initProps });
    component.find('button').simulate('keydown', { keyCode: 13 });
    expect(mockSetonKeyDownTab).toHaveBeenCalledTimes(1);
  });
});
