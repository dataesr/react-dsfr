import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { v4 as uuidv4 } from 'uuid';
import { RadioGroup, Radio } from '../index';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('uuid', () => ({
  v4: jest.fn(),
}));

describe('<RadioGroup />', () => {
  beforeEach(() => {
    uuidv4.mockImplementationOnce(() => 'xxxxxxx');
  });
  it('renders correctly', () => {
    const component = renderer
      .create(
        <RadioGroup
          legend="Légende pour l’ensemble de champs"
          name="radio-test"
        >
          <Radio
            label="Label de la radio 1"
            value="value 1"
            data-testid="radio 1"
          />
          <Radio
            label="Label de la radio 2"
            value="value 2"
            data-test-id="radio 2"
          />
        </RadioGroup>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('works in controlled mode', () => {
    let value = '';
    const onChange = (newValue) => { value = newValue; };
    const component = mount(
      <RadioGroup
        legend="Radio Group"
        onChange={onChange}
      >
        <Radio
          label="Label 1"
          value="1"
          data-test-id="radioButton1"
        />
        <Radio
          label="Label 2"
          value="2"
          data-test-id="radioButton2"
        />
      </RadioGroup>,
    );

    const radio2 = component.find('[data-test-id="radioButton2"] input').first();
    radio2.simulate('change', { target: { checked: true } });

    expect(value).toBe('2');
  });
});
