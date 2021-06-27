import React from 'react';

import {
  Row, Col, Tile, TileBody, TileImage,
} from '@dataesr/react-dsfr';

const TileExample = () => (
  <Col>
    <Row gutters>
      <Col>
        <Tile horizontal verticalMedium>
          <TileBody
            title="Tuile horizontale par défaut"
            description="Et verticale en desktop"
            href="/myPath"
          />
          <TileImage
            alt="un petit carré"
            src="https://place-hold.it/80x80"
          />
        </Tile>
      </Col>
      <Col>
        <Tile>
          <TileBody
            titleAs="h5"
            title="Tile Title"
            description="Tile description"
            to="myTileLink"
          />
        </Tile>
      </Col>
    </Row>
  </Col>
);

export default TileExample;
