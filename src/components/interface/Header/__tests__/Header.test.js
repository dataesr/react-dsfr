import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { v4 as uuidv4 } from 'uuid';
import {
  Header, HeaderBody, Service, Tools,
} from '../index';

jest.mock('uuid', () => ({
  v4: jest.fn(),
}));

Enzyme.configure({ adapter: new Adapter() });

const initialProps = {
  isNavBar: false,
  isSearchBar: true,
  navTools: [{ title: 'Se connecter', icon: 'rf-fi-lock-line', link: '/path' }],
};

describe('<Button />', () => {
  beforeEach(() => {
    uuidv4.mockImplementationOnce(() => 'xxxxxxx');
  });

  it('renders correctly', () => {
    const component = renderer
      .create(
        <Header {...initialProps}>
          <HeaderBody
            brand="republique<br>française"
            brandLinkTitle="République française"
          >
            <Service
              title="Nom du service"
              description="baseline - précisions sur l‘organisation"
            />
            <Tools
              buttonClose="fermer"
            />
          </HeaderBody>
        </Header>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  // TODO add tests
});
