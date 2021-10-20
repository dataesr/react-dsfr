import renderer from 'react-test-renderer';
import Toggle from '..';

describe('<Toggle />', () => {
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
