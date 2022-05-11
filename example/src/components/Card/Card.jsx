import React from 'react';

import {
  Col, Card, Container, Row, CardImage, CardDescription, CardDetail, CardTitle,
} from '@dataesr/react-dsfr';
import { Link as RouterLink } from 'react-router-dom';

const CardExample = () => (
  <Container>
    <Row gutters>
      <Col spacing="p-1w" n="12">
        <Card href="/" isHorizontal hasArrow={false}>
          <CardImage alt="alternative" src="./favicon.ico" />
          <CardDetail>Détail</CardDetail>
          <CardTitle>
            Qu’est-ce que le Pass Culture et comment l’obtenir ?
          </CardTitle>
          <CardDescription as="div">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Ab ad assumenda dolores eius fuga in iste labore laborum.
              Deleniti error exercitationem fugit libero.
            </div>
            Description texte body small regular consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore…
          </CardDescription>
        </Card>
      </Col>
    </Row>
    <Row gutters>
      <Col spacing="mx-4w">
        <Card asLink={<RouterLink to="/page-2" />} icon="ri-download-line">
          <CardDetail>Détail</CardDetail>
          <CardTitle>
            Card with Router Link
          </CardTitle>
          <CardDescription as="div">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Ab ad assumenda dolores eius fuga in iste labore laborum.
              Deleniti error exercitationem fugit libero.
            </div>
            Description texte body small regular consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore…
          </CardDescription>
        </Card>
      </Col>
      <Row>
        <Col n="6">
          <Card
            onClick={() => {}}
            href="/"
          >
            <CardDetail>Détail</CardDetail>
            <CardTitle>
              Card with custom onClick
            </CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Ab ad assumenda dolores eius fuga in iste labore laborum.
              Deleniti error exercitationem fugit libero.
              Description texte body small regular consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore…
            </CardDescription>
          </Card>
        </Col>
      </Row>
    </Row>
  </Container>
);

export default CardExample;
