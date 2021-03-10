import {
  render, screen, fireEvent, within,
} from '@testing-library/react';
import { SideMenu, SideMenuItem, SideMenuLink } from '..';

describe('<Accordion />', () => {
  beforeEach(() => render(
    <SideMenu title="Titre de rubrique" buttonLabel="Dans cette rubrique">
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
  ));
  it('should render accordion properly', () => {
    const sidemenu = screen.getByTestId('sidemenu');
    const items = screen.getAllByTestId('accordion');
    expect(items).toHaveLength(2);
    expect(group).toMatchSnapshot();
  });

  it('should toggle on click', () => {
    const item = screen.getAllByTestId('accordion')[0];
    expect(item.isExpanded).toBeFalsy();
    const button = screen.getAllByTestId('accordion-button')[0];
    const itemDiv = screen.getAllByTestId('accordion-div')[0];
    expect(itemDiv.className).toBe('rf-collapse');
    fireEvent.click(button);
    expect(itemDiv.className).toBe('rf-collapse rf-collapse--expanded');
    fireEvent.click(button);
    expect(itemDiv.className).toBe('rf-collapse');
  });
});
