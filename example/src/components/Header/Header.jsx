import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

import {
  Header,
  HeaderOperator,
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
  ToolTranslateItem,
  MegaNavItem,
  Link,
  SwitchTheme,
  useTheme,
  ToolTranslate,
} from '@dataesr/react-dsfr';

const HeaderExample = () => {
  const location = useLocation();
  const theme = useTheme();
  const [path, setPath] = useState(() => location.pathname || '');
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('');

  useEffect(() => {
    if (!currentLang && navigator) {
      setCurrentLang(navigator.language);
    }
  }, [currentLang]);

  useEffect(() => {
    if (path !== location.pathname) {
      setPath(location.pathname);
    }
  }, [path, setPath, location]);

  return (
    <>
      <Header>
        <HeaderBody>
          <Logo splitCharacter={10}>République Française & cie</Logo>
          <HeaderOperator>
            <img src="https://fakeimg.pl/145x81/" alt="texte alternatif" />
          </HeaderOperator>
          <Service
            asLink={<RouterLink to="/myLinkUrl" />}
            title="Playground @dataesr/react-dsfr"
            description={`${theme} mode`}
          />
          <Tool
            closeButtonLabel="fermer"
          >
            <ToolItemGroup>
              <ToolItem
                icon="ri-lock-line"
                asLink={<RouterLink to="/myNavItem" />}
              >
                react-router-dom Link
              </ToolItem>
              <ToolItem icon="ri-lock-line" link="/path" target="_blank">Link to /path</ToolItem>
              <ToolItem onClick={() => setIsOpen(true)} icon="fr-fi-theme-fill">
                <span
                  aria-controls="fr-theme-modal"
                  data-fr-opened={isOpen}
                >
                  Paramètres d’affichage
                </span>
              </ToolItem>
              <ToolTranslate currentLang={location.pathname} descCurrentLang="Current language">
                <ToolTranslateItem href="/fr" hrefLang={currentLang} active={location.pathname === '/fr'}>
                  Français
                </ToolTranslateItem>
                <ToolTranslateItem href="/en" hrefLang={currentLang} active={location.pathname === '/en'}>
                  English
                </ToolTranslateItem>
              </ToolTranslate>
            </ToolItemGroup>
            <SearchBar
              onSearch={(e) => {
                e.preventDefault();
              }}
              label="SearchBar du gouvernement"
              placeholder="Rechercher"
              buttonLabel="Rechercher"
            />
          </Tool>
        </HeaderBody>
        <HeaderNav path={path}>
          <NavItem title="Home" link="/" />
          <NavItem
            title="Countries"
            asLink={<RouterLink to="/myCountries" />}
          />
          <NavItem
            title="page 1"
            current={path.startsWith('/page-1')}
            asLink={<RouterLink to="/page-1" />}
          />
          <NavItem
            title="page 2"
            current={path.startsWith('/page-2')}
            asLink={<RouterLink to="/page-2" />}
          />
          <NavItem title="Pages">
            <NavSubItem
              current={path.startsWith('/page-1')}
              title="Page #1"
              asLink={<RouterLink to="/page-1" />}
            />
            <NavSubItem
              current={path.startsWith('/page-2')}
              asLink={<RouterLink to="/page-2" />}
              title="Page #2"
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
              <RouterLink title="title" to="/path">Link #1</RouterLink>
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
      <SwitchTheme isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default HeaderExample;
