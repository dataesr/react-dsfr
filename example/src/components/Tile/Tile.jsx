import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
  Col, Row, Tile, TileBody, TileImage,
} from '@dataesr/react-dsfr';

const TileExample = () => (
  <Col>
    <Row gutters alignItems="top">
      <Col>
        <Tile
          horizontal
          verticalMedium
        >
          <TileBody
            title="Tuile horizontale par défaut sans lien"
            description="Et verticale en desktop"
            linkHref="/"
          >
            <p>
              Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Amet corporis deleniti dolor dolorum eligendi est
              laborum mollitia nihil odio odit possimus, quasi quod rem repellat sed sequi
              soluta veniam
              veritatis.
            </p>
          </TileBody>
        </Tile>
      </Col>
      <Col>
        <Tile
          verticalMedium
          horizontal
          color="#f55"
          onClick={() => {}}
        >
          <TileBody
            title="Tuile horizontale en mobile avec lien"
            description="Et verticale en desktop"
          >
            Body Content
          </TileBody>
          <TileImage
            alt="un petit carré"
            src="https://place-hold.it/80x80"
          />
        </Tile>
      </Col>
      <Col>
        <Tile color="#a91">
          <TileBody
            titleAs="h5"
            title="Tile Title"
            description="Tile description"
            asLink={<RouterLink to="myTileLink" />}
          />
        </Tile>
      </Col>
    </Row>
  </Col>
);

export default TileExample;
