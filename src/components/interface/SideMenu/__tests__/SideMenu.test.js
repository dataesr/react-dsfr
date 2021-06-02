import {
  render, screen, cleanup, fireEvent, within,
} from '@testing-library/react';
import { v4 as uuidv4 } from 'uuid';
import { SideMenu, SideMenuItem, SideMenuLink } from '..';

jest.mock('uuid', () => ({
  v4: jest.fn(),
}));

describe('<SideMenu />', () => {
  beforeEach(() => {
    uuidv4.mockImplementation(() => 'xxxxxxx');
    render(
      <SideMenu title="Titre de rubrique" buttonLabel="Dans cette rubrique" data-testid="sidemenu">
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
      </SideMenu>,
    );
  });
  afterEach(() => cleanup);
  it('should render SideMenu properly', () => {
    const sidemenu = screen.getByTestId('sidemenu');
    const items = screen.getAllByRole('list');
    expect(items).toHaveLength(5);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(5);
    expect(sidemenu).toMatchSnapshot();
  });

  it('should toggle on click button', () => {
    const niveau1 = screen.getAllByRole('list')[1];
    const { getByRole, getByTestId } = within(niveau1);
    const button = getByRole('button');
    const item = getByTestId('xxxxxxx');
    expect(button.className).toBe('fr-sidemenu__btn');
    expect(item.className).toBe('fr-collapse');
    fireEvent.click(button);
    expect(item.className).toBe('fr-collapse fr-collapse--expanded');
    fireEvent.click(button);
    expect(item.className).toBe('fr-collapse');
  });
});
