import Enzyme from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { v4 as uuidv4 } from 'uuid';
import {
  Header, HeaderBody, HeaderOperator, Service, Tool, ToolItemGroup,
  HeaderNav, NavItem, NavSubItem, ToolItem, ToolTranslate, ToolTranslateItem,
} from '../index';
import Logo from '../../Logo';

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
        <Header data-testid="header">
          <HeaderBody data-testid="headerbody">
            <Logo splitCharacter={10} data-test-id="headerlogo">République française</Logo>
            <HeaderOperator>
              <img src="https://fakeimg.pl/145x81/" alt="texte alternatif" />
            </HeaderOperator>
            <Service
              title="Nom du service"
              description="baseline - précisions sur l‘organisation"
              data-testid="service"
            />
            <Tool
              closeButtonLabel="fermer"
              data-testid="tool"
            >
              <ToolItemGroup data-testid="toolitemgroup">
                <ToolItem icon="fr-fi-lock-line" link="/path" data-testid="toolitem">Se connecter</ToolItem>
                <ToolItem icon="fr-fi-add-circle-line" link="/path" data-test-id="toolitem">Créer un espace</ToolItem>
                <ToolTranslate currentLang="FR" descCurrentLang="Français">
                  <ToolTranslateItem href="/fr" hrefLang="FR" active>
                    Français
                  </ToolTranslateItem>
                  <ToolTranslateItem href="/en" hrefLang="EN" active={false}>
                    English
                  </ToolTranslateItem>
                </ToolTranslate>
              </ToolItemGroup>
            </Tool>
          </HeaderBody>
          <HeaderNav data-testid="headernav">
            <NavItem title="Home" link="/" data-testid="navitem" />
            <NavItem title="Resources" data-test-id="navitem">
              <NavSubItem title="Ressource #1" link="/path-to-resources-1" data-test-id="navsubitem" />
              <NavSubItem title="Ressource #2" link="/path-to-resources-2" data-test--id="navsubitem" />
              <NavSubItem title="Ressource #3" link="/path-to-resources-3" data-test="navsubitem" />
            </NavItem>
          </HeaderNav>
        </Header>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
