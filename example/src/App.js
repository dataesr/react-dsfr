import React from 'react';
import { Container } from '@dataesr/react-dsfr';
import { BrowserRouter } from 'react-router-dom';

import HeaderExample from './components/Header/Header';
import FooterExample from './components/Footer/Footer';
import Element from './Element';

import TileExample from './components/Tile/Tile';
import TagExample from './components/Tag/Tag';
import TableExample from './components/Table/Table';
import SidemenuExample from './components/Sidemenu/Sidemenu';
import ModalExample from './components/Modal/Modal';
import SelectExample from './components/Select/Select';
import RadioExample from './components/Radio/Radio';
import CheckboxExample from './components/Checkbox/Checkbox';
import MediaExample from './components/Media/Media';
import HighlightExample from './components/Highlight/Highlight';
import LinkExample from './components/Link/Link';
import LogoExample from './components/Logo/Logo';
import CardExample from './components/Card/Card';
import TextsExample from './components/Texts/Texts';
import CalloutExample from './components/Callout/Callout';
import BreadcrumbsExample from './components/Breadcrumbs/Breadcrumbs';
import ButtonExample from './components/Button/Button';
import ToggleExample from './components/Toggle/Toggle';
import AccordionExample from './components/Accordion/Accordion';
import SkiplinksExample from './components/Skiplinks/Skiplinks';

const App = () => {
  const elements = [
    { title: 'Tile - Tuile', component: <TileExample /> },
    { title: 'Tag', component: <TagExample /> },
    { title: 'Table', component: <TableExample /> },
    { title: 'Sidemenu', component: <SidemenuExample /> },
    { title: 'Modal', component: <ModalExample /> },
    { title: 'Select - TextInput', component: <SelectExample /> },
    { title: 'Radio', component: <RadioExample /> },
    { title: 'Checkbox', component: <CheckboxExample /> },
    { title: 'Media', component: <MediaExample /> },
    { title: 'Highlight', component: <HighlightExample /> },
    { title: 'Lien', component: <LinkExample /> },
    { title: 'Bloc marque', component: <LogoExample /> },
    { title: 'Card', component: <CardExample /> },
    { title: 'Tabs - Onglets', component: <TableExample /> },
    { title: 'Texts / icons', component: <TextsExample /> },
    { title: 'Callout', component: <CalloutExample /> },
    { title: 'Breadcrumbs', component: <BreadcrumbsExample /> },
    { title: 'Button', component: <ButtonExample /> },
    { title: 'Toggle', component: <ToggleExample /> },
    { title: 'Accordion', component: <AccordionExample /> },
    { title: 'Skiplinks', component: <SkiplinksExample /> },
  ];

  return (
    <BrowserRouter>
      <HeaderExample />
      <Container role="main">
        {elements.map((element) => (
          <Element title={element.title}>{element.component}</Element>
        ))}
      </Container>
      <FooterExample />
    </BrowserRouter>
  );
};

export default App;
