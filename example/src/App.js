import React from 'react';
import { Container, Row, Col } from '@dataesr/react-dsfr';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AccordionExample from './components/Accordion/Accordion';
import AlertExample from './components/Alert/Alert';
import BadgeExample from './components/Badge/Badge';
import BreadcrumbsExample from './components/Breadcrumbs/Breadcrumbs';
import ButtonExample from './components/Button/Button';
import ButtonGroupExample from './components/Button/ButtonGroup';
import CalloutExample from './components/Callout/Callout';
import CardExample from './components/Card/Card';
import CheckboxExample from './components/Checkbox/Checkbox';
import ConsentManagerExample from './components/ConsentManager/ConsentManager';
import FooterExample from './components/Footer/Footer';
import FileExample from './components/File/File';
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
import StepperExample from './components/Stepper/Stepper';
import DownloadExample from './components/Download/Download';
import Element from './Element';
import Page1 from './Page-1';
import Page2 from './Page-2';
import ShareExample from './components/Share/Share';
import NoticeExample from './components/Notice/Notice';

const App = () => {
  const elements = [
    { title: 'Accordion', component: <AccordionExample /> },
    { title: 'Alert', component: <AlertExample /> },
    { title: 'Badge', component: <BadgeExample /> },
    { title: 'Bloc marque', component: <LogoExample /> },
    { title: 'Breadcrumbs', component: <BreadcrumbsExample /> },
    { title: 'Button', component: <ButtonExample /> },
    { title: 'Button group', component: <ButtonGroupExample /> },
    { title: 'Callout', component: <CalloutExample /> },
    { title: 'Card', component: <CardExample /> },
    { title: 'Checkbox', component: <CheckboxExample /> },
    { title: 'Consent', component: <ConsentManagerExample /> },
    { title: 'Download', component: <DownloadExample /> },
    { title: 'File', component: <FileExample /> },
    { title: 'Highlight', component: <HighlightExample /> },
    { title: 'Icons', component: <IconsExample /> },
    { title: 'Lien', component: <LinkExample /> },
    { title: 'Media', component: <MediaExample /> },
    { title: 'Notice', component: <NoticeExample /> },
    { title: 'Modal', component: <ModalExample /> },
    { title: 'Radio', component: <RadioExample /> },
    { title: 'Select', component: <SelectExample /> },
    { title: 'Sidemenu', component: <SidemenuExample /> },
    { title: 'Skiplinks', component: <SkiplinksExample /> },
    { title: 'Sommaire', component: <SummaryExample /> },
    { title: 'Table', component: <TableExample /> },
    { title: 'Tabs - Onglets', component: <TabsExample /> },
    { title: 'Tag', component: <TagExample /> },
    { title: 'Texts', component: <TextsExample /> },
    { title: 'TextInput', component: <TextInputExample /> },
    { title: 'Tile - Tuile', component: <TileExample /> },
    { title: 'Toggle', component: <ToggleExample /> },
    { title: 'Share', component: <ShareExample /> },
    { title: 'Stepper', component: <StepperExample /> },
  ];

  return (
    <BrowserRouter>
      <HeaderExample />
      <Container>
        <Row>
          <Col n="md-4 12">
            <SidemenuExample />
          </Col>
          <Col n="8">
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
          </Col>
        </Row>
      </Container>
      <FooterExample />
    </BrowserRouter>
  );
};

export default App;
