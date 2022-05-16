import React from 'react';

import {
  Col, Card, Container, Row, CardImage, CardDescription, CardDetail, CardTitle, Tag, TagGroup,
  CardHeader, Badge, BadgeGroup, Button, ButtonGroup, CardFooter,
} from '@dataesr/react-dsfr';
import { Link as RouterLink } from 'react-router-dom';

const CardExample = () => (
  <Container>
    <Row gutters>
      <Col spacing="p-1w" n="12">
        <Card href="/" isHorizontal hasArrow={false} isGrey>
          <CardHeader>
            <TagGroup>
              <Tag>Label tag</Tag>
              <Tag>Label tag</Tag>
            </TagGroup>
            <CardImage alt="alternative" src="./favicon.ico" />
          </CardHeader>
          <CardDetail position="bottom">
            <TagGroup>
              <Tag>Tag #1</Tag>
              <Tag>Tag #2</Tag>
            </TagGroup>
            détails
          </CardDetail>
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
          <CardDetail>
            <BadgeGroup>
              <Badge
                text="Badge #1"
              />
              <Badge
                text="Badge #2"
              />
            </BadgeGroup>
          </CardDetail>
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
            hasBackground={false}
            hasBorder={false}
            hasArrow={false}
            hasShadow
            onClick={() => {}}
            href="/"
          >
            <CardDetail>Détail top</CardDetail>
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
            <CardDetail position="bottom">
              detail
            </CardDetail>
            <CardFooter>
              <ButtonGroup isEquisized isInlineFrom="sm" size="sm">
                <Button secondary title="title">Button #1</Button>
                <Button title="title">Button #2</Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Row>
  </Container>
);

export default CardExample;
