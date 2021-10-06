import React from 'react';
import renderer from 'react-test-renderer';
import ConsentBanner from '../ConsentBanner';

describe('<ConsentBanner />', () => {
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
});
