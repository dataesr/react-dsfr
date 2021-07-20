import React from 'react';
import { Container } from '@dataesr/react-dsfr';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HeaderExample from './components/Header/Header';
import FooterExample from './components/Footer/Footer';
import Element from './Element';

import SummaryExample from './components/Summary/Summary';
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
import Page1 from './Page-1';
import Page2 from './Page-2';
import TabsExample from './components/Tabs/Tabs';
import TextInputExample from './components/TextInput/TextInput';
import AlertExample from './components/Alert/Alert';

const App = () => {
  const elements = [
    { title: 'Accordion', component: <AccordionExample /> },
    { title: 'Alert', component: <AlertExample /> },
    { title: 'Bloc marque', component: <LogoExample /> },
    { title: 'Breadcrumbs', component: <BreadcrumbsExample /> },
    { title: 'Button', component: <ButtonExample /> },
    { title: 'Callout', component: <CalloutExample /> },
    { title: 'Card', component: <CardExample /> },
    { title: 'Checkbox', component: <CheckboxExample /> },
    { title: 'Highlight', component: <HighlightExample /> },
    { title: 'Lien', component: <LinkExample /> },
    { title: 'Media', component: <MediaExample /> },
    { title: 'Modal', component: <ModalExample /> },
    { title: 'Table', component: <TableExample /> },
    { title: 'Tabs - Onglets', component: <TabsExample /> },
    { title: 'Tag', component: <TagExample /> },
    { title: 'Texts / icons', component: <TextsExample /> },
    { title: 'TextInput', component: <TextInputExample /> },
    { title: 'Tile - Tuile', component: <TileExample /> },
    { title: 'Toggle', component: <ToggleExample /> },
    { title: 'Radio', component: <RadioExample /> },
    { title: 'Select', component: <SelectExample /> },
    { title: 'Sidemenu', component: <SidemenuExample /> },
    { title: 'Skiplinks', component: <SkiplinksExample /> },
    { title: 'Sommaire', component: <SummaryExample /> },
  ];

  return (
    <BrowserRouter>
      <HeaderExample />
      <Switch>
        <Route exact path="/page-1">
          <Page1 />
        </Route>
        <Route exact path="/page-2">
          <Page2 />
        </Route>
        <Container role="main">
          {elements.map((element) => (
            <Element key={element.title} title={element.title}>{element.component}</Element>
          ))}
        </Container>
      </Switch>
      <FooterExample />
    </BrowserRouter>
  );
};

export default App;
