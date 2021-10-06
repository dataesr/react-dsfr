import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ConsentBanner from '../ConsentBanner';

Enzyme.configure({ adapter: new Adapter() });

describe('<ConsentBanner />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = (props = {}) => shallow(
      <ConsentBanner
        acceptBannerButton={props.acceptBannerButton || jest.fn()}
        refuseBannerButton={props.refuseBannerButton || jest.fn()}
        openConsentModal={props.openConsentModal || jest.fn()}
        bannerButtons={{
          accept: {
            label: 'Tout Accepter',
          },
          refuse: {
            label: 'Tout Refuser',
          },
          customize: {
            label: 'Personnaliser',
          },
        }}
        title="Title Banner"
        description="Description Banner"
      />,
    );
  });

  it('should render ConsentBanner properly', () => {
    const component = renderer
      .create(<ConsentBanner
        acceptBannerButton={jest.fn()}
        refuseBannerButton={jest.fn()}
        openConsentModal={jest.fn()}
        bannerButtons={{
          accept: {
            label: 'Tout Accepter',
          },
          refuse: {
            label: 'Tout Refuser',
          },
          customize: {
            label: 'Personnaliser',
          },
        }}
        title="Title Banner"
        description="Description Banner"
      />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('onClick Custom Button ConsentBanner', () => {
    const mockClick3 = jest.fn();
    const props = {
      openConsentModal: mockClick3,
    };

    const component = wrapper({ ...props });
    component.find("[data-testid='button-consent']").simulate('click');
    expect(mockClick3).toHaveBeenCalledTimes(1);
  });

  it('onClick Refuse Button ConsentBanner', () => {
    const mockClick2 = jest.fn();
    const props = {
      refuseBannerButton: mockClick2,
    };

    const component = wrapper({ ...props });
    component.find("[data-testid='button-refuse']").simulate('click');
    expect(mockClick2).toHaveBeenCalledTimes(1);
  });

  it('onClick Accept Button ConsentBanner', () => {
    const mockClick1 = jest.fn();
    const props = {
      acceptBannerButton: mockClick1,
    };

    const component = wrapper({ ...props });
    component.find("[data-testid='button-accept']").simulate('click');
    expect(mockClick1).toHaveBeenCalledTimes(1);
  });
});
