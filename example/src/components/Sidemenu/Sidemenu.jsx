import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
  SideMenu, SideMenuItem, SideMenuLink,
} from '@dataesr/react-dsfr';

const onClick = () => {};

const SidemenuExample = () => (
  <SideMenu
    title="Titre de rubrique"
    buttonLabel="Nav Mobile"
  >
    <SideMenuItem title="Niveau 1">
      <SideMenuLink asLink={<RouterLink to="mySideMenuLink" />}>Accès direct niveau 2</SideMenuLink>
      <SideMenuLink onClick={onClick} href="/">On click function test</SideMenuLink>
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
  </SideMenu>
);

export default SidemenuExample;
