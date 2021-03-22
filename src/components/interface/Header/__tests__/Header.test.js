import Enzyme from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { v4 as uuidv4 } from 'uuid';
import {
  Header, HeaderBody, Service, Tool, ToolItemGroup, HeaderNav, NavItem, NavSubItem, ToolItem,
} from '../index';
import BrandLogo from '../../BrandLogo';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('uuid', () => ({
  v4: jest.fn(),
}));

describe('<Header />', () => {
  beforeEach(() => {
    uuidv4.mockImplementationOnce(() => 'xxxxxxx');
    uuidv4.mockImplementationOnce(() => 'yyyyyy');
  });
  it('renders correctly', () => {
    const component = renderer
      .create(
        <Header>
          <HeaderBody>
            <BrandLogo splitCharacter={10}>République française</BrandLogo>
            <Service
              title="Nom du service"
              description="baseline - précisions sur l‘organisation"
            />
            <Tool
              buttonClose="fermer"
            >
              <ToolItemGroup>
                <ToolItem title="Se connecter" icon="rf-fi-lock-line" link="/path" />
                <ToolItem title="Créer un espace" icon="rf-fi-add-circle-line" link="/path" />
              </ToolItemGroup>
            </Tool>
          </HeaderBody>
          <HeaderNav>
            <NavItem title="Home" link="/" />
            <NavItem title="Resources">
              <NavSubItem title="Ressource #1" link="/path-to-resources-1" />
              <NavSubItem title="Ressource #2" link="/path-to-resources-2" />
              <NavSubItem title="Ressource #3" link="/path-to-resources-3" />
            </NavItem>
          </HeaderNav>
        </Header>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  // TODO add tests
});
