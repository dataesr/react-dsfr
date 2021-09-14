import React from 'react';

import {
  Col, Card, CardImage, CardDescription, CardDetail, CardTitle,
} from '@dataesr/react-dsfr';
import { Link as RouterLink } from 'react-router-dom';

const CardExample = () => (
  <>
    <Col spacing="p-1w">
      <Card href="/" isHorizontal hasArrow={false}>
        <CardImage alt="alternative" src="http://fakeimg.pl/300/" />
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
    <Col spacing="mx-2w">
      <Card asLink={<RouterLink to="/page-2" />}>
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
  </>
);

export default CardExample;
