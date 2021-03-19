import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import { Tabs, Tab } from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('<Tabs />', () => {
  const initProps = {
    className: 'my-class',
    children: 'Tabinouze',
    scheme: 'soft-yellow-medium',
  };
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Tabs
        className={initProps.className}
        scheme={initProps.scheme}
      >
        {initProps.children}
      </Tabs>,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render Tabs properly', () => {
    const component = renderer
      .create(
        <Tabs scheme="soft-blue-soft">
          <Tab label="Label">Tab #1</Tab>
        </Tabs>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('should have custom class', () => {
    expect(wrapper.find('.rf-tabs').hasClass('my-class')).toBeTruthy();
  });

  it('should call setHeight', () => {
    const setHeight = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation((contentTabHeight) => [contentTabHeight, setHeight]);
    expect(setHeight).toBeTruthy();
  });
});
