import React from 'react';
import { Container } from '@dataesr/react-dsfr';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AccordionExample from './components/Accordion/Accordion';
import AlertExample from './components/Alert/Alert';
import BreadcrumbsExample from './components/Breadcrumbs/Breadcrumbs';
import ButtonExample from './components/Button/Button';
import CalloutExample from './components/Callout/Callout';
import CardExample from './components/Card/Card';
import CheckboxExample from './components/Checkbox/Checkbox';
import FooterExample from './components/Footer/Footer';
import HeaderExample from './components/Header/Header';
import HighlightExample from './components/Highlight/Highlight';
import IconsExample from './components/Icons/Icons';
import LinkExample from './components/Link/Link';
import LogoExample from './components/Logo/Logo';
import MediaExample from './components/Media/Media';
import ModalExample from './components/Modal/Modal';
import RadioExample from './components/Radio/Radio';
import SelectExample from './components/Select/Select';
import SidemenuExample from './components/Sidemenu/Sidemenu';
import SummaryExample from './components/Summary/Summary';
import TableExample from './components/Table/Table';
import TabsExample from './components/Tabs/Tabs';
import TagExample from './components/Tag/Tag';
import TextInputExample from './components/TextInput/TextInput';
import TextsExample from './components/Texts/Texts';
import TileExample from './components/Tile/Tile';
import ToggleExample from './components/Toggle/Toggle';
import SkiplinksExample from './components/Skiplinks/Skiplinks';
import Element from './Element';
import Page1 from './Page-1';
import Page2 from './Page-2';

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
    { title: 'Icons', component: <IconsExample /> },
    { title: 'Lien', component: <LinkExample /> },
    { title: 'Media', component: <MediaExample /> },
    { title: 'Modal', component: <ModalExample /> },
    { title: 'Table', component: <TableExample /> },
    { title: 'Tabs - Onglets', component: <TabsExample /> },
    { title: 'Tag', component: <TagExample /> },
    { title: 'Texts', component: <TextsExample /> },
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
