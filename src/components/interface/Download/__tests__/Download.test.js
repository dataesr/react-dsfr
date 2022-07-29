import renderer from 'react-test-renderer';
import { v4 as uuidv4 } from 'uuid';
import { Download } from '../index';

jest.mock('uuid', () => ({
  v4: jest.fn(),
}));

describe('<Download />', () => {
  beforeEach(() => {
    uuidv4.mockImplementationOnce(() => 'xxxxxxx');
  });
  it('renders correctly', () => {
    const component = renderer
      .create(
        <Download
          fileName="File Name"
          metaData="metaData"
          label="Label de la checkbox"
          file="value"
        />,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
