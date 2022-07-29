import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import React from 'react';
import Notice from '../Notice';

Enzyme.configure({ adapter: new Adapter() });

const initialProps = {
  title: 'TiTle',
  visible: true,
};

describe('<Notice />', () => {
  it('renders correctly', () => {
    const component = renderer
      .create(
        <Notice
          title="Title"
          visible={initialProps.visible}
        />,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('should call onClose', () => {
    const mockClick = jest.fn();

    const notice = shallow(
      <Notice
        visible
        onClose={mockClick}
        title="Title"
      />,
    );

    notice.find('.fr-btn--close').simulate('click');
    expect(mockClick).toHaveBeenCalled();
  });
});
