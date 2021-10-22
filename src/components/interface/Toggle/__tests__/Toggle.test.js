import renderer from 'react-test-renderer';
import { v4 as uuidv4 } from 'uuid';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Toggle from '..';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('uuid', () => ({
  v4: jest.fn(),
}));

describe('<Toggle />', () => {
  beforeEach(() => {
    uuidv4.mockImplementationOnce(() => 'xyx');
  });
  it('should render Toggle properly', () => {
    const component = renderer
      .create(
        <Toggle
          checked
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
  it('should call onChange', () => {
    const mockClick = jest.fn();

    const component = shallow(
      <Toggle
        checked
        onChange={mockClick}
        label="Accepter les cookies"
        description="Activez-moi!"
        hasSeparator
        hasLabelLeft
        data-testid="toggle"
      />,
    );

    component.find('.fr-toggle__input').simulate('change');
    expect(mockClick).toHaveBeenCalled();
  });
});
