import React from 'react';
import renderer from 'react-test-renderer';
import { v4 as uuidv4 } from 'uuid';
import ConsentService from '../ConsentService';

jest.mock('uuid', () => ({
  v4: jest.fn(),
}));

describe('<ConsentService />', () => {
  beforeEach(() => {
    uuidv4.mockImplementationOnce(() => 'id');
    uuidv4.mockImplementationOnce(() => 'name');
  });

  it('should render ConsentService properly', () => {
    const component = renderer
      .create(<ConsentService
        defaultConsent="accept"
        description="Description"
        title="Préférences pour tous les services."
        acceptLabel="Tout accepter"
        refuseLabel="Tout refuser"
        acceptValue="accept-all-consent"
        refuseValue="refuse-all-consent"
        consent="accept-all-consent"
      />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
