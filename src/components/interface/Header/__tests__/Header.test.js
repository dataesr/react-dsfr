import Enzyme from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import {
  Header, HeaderBody, Service, Tool, Brand, ToolItemGroup, HeaderNav, NavItem, NavSubItem, ToolItem,
} from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('<Header />', () => {
  it('renders correctly', () => {
    const component = renderer
      .create(
        <Header>
          <HeaderBody>
            <Brand
              title="republique<br>française"
              linkTitle="République française"
            />
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
