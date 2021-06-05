import React from 'react';

import {
  Col, Card, CardImage, CardDescription, CardDetail, CardTitle,
} from '@dataesr/react-dsfr';

const TagExample = () => (
  <Col>
    <Card href="/" isHorizontal hasArrow={false}>
      <CardImage alt="alternative" src="http://fakeimg.pl/300/" />
      <CardDetail>Détail</CardDetail>
      <CardTitle>
        Qu’est-ce que le Pass Culture et comment l’obtenir ?
      </CardTitle>
      <CardDescription>
        Description texte body small regular consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore…
      </CardDescription>
    </Card>
  </Col>
);

export default TagExample;
