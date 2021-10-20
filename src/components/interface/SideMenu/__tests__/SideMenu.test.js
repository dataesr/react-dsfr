import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Enzyme from 'enzyme';
import renderer from 'react-test-renderer';
import { SideMenu, SideMenuItem, SideMenuLink } from '..';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('uuid', () => ({
  v4: jest.fn(),
}));

// TODO add tests
describe('<SideMenu />', () => {
  it('should render SideMenu properly', () => {
    const component = renderer
      .create(<SideMenu title="Titre de rubrique" buttonLabel="Dans cette rubrique" data-testid="sidemenu">
        <SideMenuItem title="Niveau 1" data-testid="sidemenuitem">
          <SideMenuLink href="/" data-test-id="sidemenulink1">Accès direct niveau 2</SideMenuLink>
          <SideMenuLink href="/" data-test--id="sidemenulink2">Accès direct niveau 2</SideMenuLink>
          <SideMenuItem title="Niveau 2" data-test="sidemenuitem2">
            <SideMenuLink href="/" data-test="sidemenulink3">Accès direct niveau 3</SideMenuLink>
            <SideMenuLink href="/" data-testid="sidemenu4">Accès direct niveau 3</SideMenuLink>
            <SideMenuLink href="/">Accès direct niveau 3</SideMenuLink>
            <SideMenuLink href="/">Accès direct niveau 3</SideMenuLink>
            <SideMenuLink href="/">Accès direct niveau 3</SideMenuLink>
            <SideMenuLink href="/">Accès direct niveau 3</SideMenuLink>
          </SideMenuItem>
          <SideMenuLink href="/">Accès direct niveau 2</SideMenuLink>
          <SideMenuLink href="/">Accès direct niveau 2</SideMenuLink>
          <SideMenuLink href="/">Accès direct niveau 2</SideMenuLink>
        </SideMenuItem>
        <SideMenuItem title="Niveau 1">
          <SideMenuLink href="/">Accès direct niveau 2</SideMenuLink>
          <SideMenuLink href="/">Accès direct niveau 2</SideMenuLink>
          <SideMenuItem title="Niveau 2">
            <SideMenuLink href="/">Accès direct niveau 3</SideMenuLink>
            <SideMenuLink href="/">Accès direct niveau 3</SideMenuLink>
            <SideMenuLink href="/">Accès direct niveau 3</SideMenuLink>
            <SideMenuLink href="/">Accès direct niveau 3</SideMenuLink>
            <SideMenuLink href="/">Accès direct niveau 3</SideMenuLink>
            <SideMenuLink href="/">Accès direct niveau 3</SideMenuLink>
          </SideMenuItem>
          <SideMenuLink href="/">Accès direct niveau 2</SideMenuLink>
          <SideMenuLink href="/">Accès direct niveau 2</SideMenuLink>
          <SideMenuLink href="/">Accès direct niveau 2</SideMenuLink>
        </SideMenuItem>
      </SideMenu>)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
