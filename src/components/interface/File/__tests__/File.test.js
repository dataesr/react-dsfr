import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import File from '../File';

Enzyme.configure({ adapter: new Adapter() });

describe('<File />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = (props = {}) => shallow(
      <File label={props.label} onChange={props.onChange} />,
    );
  });

  it('renders correctly', () => {
    const component = renderer
      .create(
        <File label="Label File" hint="Hint" message="Format de fichier non supporté" />,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('OnChange File', () => {
    const onChange = jest.fn();
    const props = {
      label: 'label',
      onChange,
    };

    const component = wrapper({ ...props });
    component.find('input').simulate('change');
    expect(onChange).toHaveBeenCalled();
  });
});
