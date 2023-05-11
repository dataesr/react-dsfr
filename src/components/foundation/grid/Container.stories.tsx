import { ComponentStory } from '@storybook/react';

import Col from './Col';
import Container from './Container';
import Row from './Row';

export default {
  title: 'Grille et points de rupture - Grid System',
  component: Container,
  subcomponents: { Row, Col },
};

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const SimpleContainer = Template.bind({});
SimpleContainer.args = {
  children: [
    <Row>
      <Col>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Col>
    </Row>,
  ],
};
SimpleContainer.storyName = 'Un container simple';

export const FluidContainer = Template.bind({});
FluidContainer.args = {
  fluid: true,
  children: [
    <Row>
      <Col>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Col>
    </Row>,
  ],
};
FluidContainer.storyName = 'Mise en page sans marge externe et sans gouttière';

export const RowWithGutters = Template.bind({});
RowWithGutters.args = {
  children: [
    <Row gutters>
      <Col>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Col>
    </Row>,
  ],
};
RowWithGutters.storyName = 'Mise en page sans marge externe et avec gouttière';

export const AdjustBlocksWidthN2 = Template.bind({});
AdjustBlocksWidthN2.args = {
  children: [
    <Row gutters>
      <Col n="2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Col>
    </Row>,
  ],
};
AdjustBlocksWidthN2.storyName = 'La largeur de la colonne est définie par 2/12';

export const AdjustBlocksWidthN8 = Template.bind({});
AdjustBlocksWidthN8.args = {
  fluid: true,
  children: [
    <Row gutters>
      <Col n="8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Col>
    </Row>,
  ],
};
AdjustBlocksWidthN8.storyName = 'La largeur de la colonne est définie par 8/12';

export const AdjustBlocksWidthToLayout = Template.bind({});
AdjustBlocksWidthToLayout.args = {
  children: [
    <Row>
      <Col n="12 sm-8 md-6 lg-4 xl-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Col>
    </Row>,
  ],
};
AdjustBlocksWidthToLayout.storyName = "Texte ajusté en fonction de l'écran";
AdjustBlocksWidthToLayout.parameters = {
  docs: {
    description: {
      story: "La largeur de la colonne est définie à l'aide de la propriété `n`. Par exemple, `n=\"12 sm-8 md-6 lg-4 xl-2\"` appliquera 100% de largeur de 0 à 575px (col `n=\"12\"` est la valeur mobile par défaut), 66.6666% de largeur de 576px à 767px, 50% de largeur de 768px à 991px, 33.3333% de largeur de 992px à 1199px, et 16.6666% de largeur au delà de 1200px.",
    },
  },
};

export const Offset = Template.bind({});
Offset.args = {
  children: [
    <Row gutters>
      <Col offset="1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Col>
    </Row>,
  ],
};
Offset.storyName = 'Décaler et laissera 1 colonne vide';

export const JustifyContent = Template.bind({});
JustifyContent.args = {
  fluid: true,
  children: [
    <Row justifyContent="center">
      <Col n="2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </Col>
    </Row>,
  ],
};
JustifyContent.storyName = 'Le texte centré au milieu';
