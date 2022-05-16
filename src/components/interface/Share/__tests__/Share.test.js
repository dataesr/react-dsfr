import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import React from 'react';
import { Share, ShareButton } from '..';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('uuid', () => ({
  v4: jest.fn(),
}));

describe('<Share />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = (props = {}) => shallow(
      <ShareButton
        onClick={props.onClick}
        type="facebook"
        label="Partager sur facebook"
        href="https://www.facebook.com/sharer.php"
      />,
    );
  });

  it('should render Share properly', () => {
    const component = renderer
      .create(
        <Share title="Partager la page">
          <ShareButton
            onClick={() => {}}
            type="facebook"
            label="Partager sur facebook"
            href="https://www.facebook.com/sharer.php"
          />
        </Share>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('onClick Share facebook', () => {
    const mockClick = jest.fn();
    const props = {
      onClick: mockClick,
    };

    const component = wrapper({ ...props });
    component.find('.fr-btn--facebook').simulate('click', { preventDefault: () => {} });
    expect(mockClick).toHaveBeenCalled();
  });
});
