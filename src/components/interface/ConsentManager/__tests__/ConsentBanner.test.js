import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ConsentBanner from '../ConsentBanner';

Enzyme.configure({ adapter: new Adapter() });

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
