import renderer from 'react-test-renderer';
import { v4 as uuidv4 } from 'uuid';
import Toggle from '..';

jest.mock('uuid', () => ({
  v4: jest.fn(),
}));

describe('<Toggle />', () => {
  beforeEach(() => {
    uuidv4.mockImplementationOnce(() => 'xyx');
  });
  it('should render Toggle properly', () => {
    const onChange = jest.fn();
    const component = renderer
      .create(
        <Toggle
          checked
          onChange={onChange}
          label="Accepter les cookies"
          description="Activez-moi!"
          hasSeparator
          hasLabelLeft
          data-testid="toggle"
        />,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
