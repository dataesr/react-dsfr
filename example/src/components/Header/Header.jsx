import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
  Header,
  HeaderBody,
  Logo,
  Service,
  Tool,
  ToolItem,
  ToolItemGroup,
  SearchBar,
  HeaderNav,
  NavItem,
  NavSubItem,
  MegaNavSubItem,
  MegaNavItem,
  Link,
} from '@dataesr/react-dsfr';

const HeaderExample = () => (
  <Header>
    <HeaderBody>
      <Logo splitCharacter={10}>République Française & cie</Logo>
      <Service
        asLink={<RouterLink to="/myLinkUrl" />}
        title="Playground @dataesr/react-dsfr"
        description="messy tests"
      />
      <Tool
        closeButtonLabel="fermer"
      >
        <ToolItemGroup>
          <ToolItem
            icon="ri-lock-line"
            asLink={<RouterLink to="myNavItem" />}
          >
            Example
          </ToolItem>
          <ToolItem icon="ri-lock-line" link="/path">Example</ToolItem>
          <ToolItem icon="ri-add-circle-line" link="/path">Example</ToolItem>
        </ToolItemGroup>
        <SearchBar
          onSearch={() => {
          }}
          label="SearchBar du gouvernement"
          placeholder="Rechercher"
          buttonLabel="Rechercher"
        />
      </Tool>
    </HeaderBody>
    <HeaderNav>
      <NavItem title="Home" link="/" />
      <NavItem
        title="Countries"
        current
        asLink={<RouterLink to="myNavItem" />}
      />
      <NavItem title="Resources">
        <NavSubItem title="Ressource #1" link="/path-to-resources-1" current />
        <NavSubItem
          current
          asLink={<RouterLink to="myNavSubItem" />}
          title="Ressource #2"
          link="/path-to-resources-2"
        />
        <NavSubItem title="Ressource #3" link="/path-to-resources-3" />
      </NavItem>
      <MegaNavItem
        title="Santé"
        description="Croquez des pommes"
        as="h3"
        closeButtonLabel="Fermeture"
        linkLabel="Vers l'au delà"
        link="/"
      >
        <MegaNavSubItem
          title="Category #1"
          link="/path-to-resources-1"
        >
          <Link title="title" href="/path">Link #1</Link>
          <Link title="title" href="/path" current>Link #2</Link>
        </MegaNavSubItem>
        <MegaNavSubItem
          title="Category #2"
          link="/path-to-resources-2"
          current
        >
          <Link title="title" href="/path">Link #1</Link>
          <Link title="title" href="/path">Link #2</Link>
          <Link title="title" href="/path">Link #3</Link>
        </MegaNavSubItem>
        <MegaNavSubItem
          title="Category #3"
          link="/path-to-resources-2"
          current
        >
          <Link title="title" href="/path">Link #1</Link>
        </MegaNavSubItem>
      </MegaNavItem>
    </HeaderNav>
  </Header>
);

export default HeaderExample;
