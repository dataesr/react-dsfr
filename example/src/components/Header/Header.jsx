import React from 'react';
import { useLocation } from 'react-router-dom';

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

const HeaderExample = () => {
  const { pathname } = useLocation();

  return (
    <Header>
      <HeaderBody>
        <Logo splitCharacter={10}>République Française & cie</Logo>
        <Service
          to="/"
          title="Playground @dataesr/react-dsfr"
          description="messy tests"
        />
        <Tool closeButtonLabel="fermer">
          <ToolItemGroup>
            <ToolItem icon="ri-lock-line" href="https://gouvfr.atlassian.net/wiki/spaces/DB/overview?homepageId=145359476">
              Documentation officielle
            </ToolItem>
            <ToolItem icon="ri-lock-line" to="/path">Paramètres d&apos;affichage</ToolItem>
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
        <NavItem title="Acceuil" to="/" />
        <NavItem title="Examples" current={pathname.startsWith('/examples/forms')}>
          <NavSubItem
            current={pathname.startsWith('/examples/forms')}
            title="Formulaires"
            to="/examples/forms"
          />
          <NavSubItem
            current={pathname.startsWith('/examples/components')}
            to="/examples/components"
            title="Composants"
          />
          <NavSubItem
            current={pathname.startsWith('/examples/layout')}
            title="Layout"
            to="/examples/layout"
          />
        </NavItem>
        <NavItem title="Couleurs" current={pathname.startsWith('/couleurs')}>
          <NavSubItem
            current={pathname.startsWith('/couleurs/palette')}
            title="Palette"
            to="/couleurs/palette"
          />
          <NavSubItem
            current={pathname.startsWith('/couleurs/combinaisons')}
            title="Combinaisons"
            to="/couleurs/combinaisons"
          />
        </NavItem>
        <MegaNavItem
          title="Composants"
          as="h3"
          closeButtonLabel="Fermeture"
        >
          <MegaNavSubItem title="Fondations">
            <Link to="/boutton">Bouttons</Link>
            <Link to="/tile" current>Tuile</Link>
          </MegaNavSubItem>
          <MegaNavSubItem
            title="Formulaires"
            current
          >
            <Link href="/path">Link #1</Link>
            <Link href="/path">Link #2</Link>
            <Link href="/path">Link #3</Link>
          </MegaNavSubItem>
          <MegaNavSubItem
            title="Category #3"
            to="/path-to-resources-2"
            current
          >
            <Link title="title" href="/path">Link #1</Link>
          </MegaNavSubItem>
        </MegaNavItem>
      </HeaderNav>
    </Header>
  );
};

export default HeaderExample;
