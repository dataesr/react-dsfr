```jsx

import { Tile, TileBody, TileImage } from '.';

<Tile horizontal={true} verticalMedium={true}>
    <TileImage
        alt="un petit carré"
        src="https://place-hold.it/80x80">
    </TileImage>
    <TileBody
        title="Tuile horizontale par défaut"
        description="Et verticale en desktop"
        linkHref='/myPath'>
    </TileBody>
</Tile>
```

```jsx

import { Tile, TileBody, TileImage } from '.';

<Tile horizontalMedium={true} scheme="soft-orange-dark">
    <TileImage
        alt="un petit carré"
        src="https://place-hold.it/80x80">
    </TileImage>
    <TileBody
        title="Tuile verticale par défaut"
        description="Et horizontale en desktop"
        linkHref='/myPath'>
    </TileBody>
</Tile>
```


#### Utilisation avec Container, Row, Col

```jsx
import Row from '../../foundation/grid/Row/Row';
import Container from '../../foundation/grid/Container/Container';
import Col from '../../foundation/grid/Col/Col';
import { Tile, TileBody, TileImage } from '.';

<Container>
    <Row gutter={true}>
        <Col>
            <Tile>
                <TileImage
                    alt="un petit carré"
                    src="https://place-hold.it/80x80">
                </TileImage>
                <TileBody
                    titleAs="h5"
                    title="Ceci est mon titre #1"
                    linkHref='/myPath'>
                </TileBody>
            </Tile>
        </Col>
        <Col>
            <Tile>
                <TileBody
                    titleAs="h5"
                    title="Ceci est mon titre #2"
                    description="Ceci est ma description"
                    linkHref='/myPath'>
                </TileBody>
            </Tile>
        </Col>
        <Col>
            <Tile>
                <TileImage
                    alt="un petit carré"
                    src="https://place-hold.it/80x80"
                    linkHref='/myPath'>
                </TileImage>
                <TileBody
                    titleAs="h5"
                    title="Ceci est mon titre #3"
                    linkHref='/myPath'>
                </TileBody>
            </Tile>
        </Col>
    </Row>
</Container>
```
