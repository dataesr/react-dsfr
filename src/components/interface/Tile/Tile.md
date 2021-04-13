## Tile - Tuile

La tuile est un point d’entrée qui redirige les utilisateurs vers des pages de contenu. Elle fait partie d'une collection et n’est jamais présentée de manière isolée.

### Tuile horizontale par défaut et verticale en desktop
```jsx

import { Tile, TileBody, TileImage } from '.';

<Tile horizontal={true} verticalMedium={true}>
    <TileBody
        title="Tile Title"
        description="Tile description"
        linkHref='/myPath'>
    </TileBody>
    <TileImage
        alt="alternative"
        src="https://place-hold.it/80x80">
    </TileImage>
</Tile>
```

### Tuile verticale par défaut et horizontale en desktop
```jsx

import { Tile, TileBody, TileImage } from '.';

<Tile horizontalMedium={true} scheme="soft-orange-dark">
    <TileBody
        title="Tile Title"
        description="Tile description"
        linkHref='/myPath'>
    </TileBody>
    <TileImage
        alt="alternative"
        src="https://place-hold.it/80x80">
    </TileImage>
</Tile>
```


### Usage avec Container, Row, Col

```jsx
import Row from '../../foundation/grid/Row/Row';
import Container from '../../foundation/grid/Container/Container';
import Col from '../../foundation/grid/Col/Col';
import { Tile, TileBody, TileImage } from '.';

<Container>
    <Row gutter={true}>
        <Col>
            <Tile>
                <TileBody
                    titleAs="h5"
                    title="Tile Title"
                    linkHref='/myPath'>
                </TileBody>
                <TileImage
                    alt="alternative"
                    src="https://place-hold.it/80x80">
                </TileImage>
            </Tile>
        </Col>
        <Col>
            <Tile>
                <TileBody
                    titleAs="h5"
                    title="Tile Title"
                    description="Tile description"
                    linkHref='/myPath'>
                </TileBody>
            </Tile>
        </Col>
        <Col>
            <Tile>
                <TileBody
                    titleAs="h5"
                    title="Tile Title"
                    linkHref='/myPath'>
                </TileBody>
                <TileImage
                    alt="alternative"
                    src="https://place-hold.it/80x80"
                    linkHref='/myPath'>
                </TileImage>
            </Tile>
        </Col>
    </Row>
</Container>
```
