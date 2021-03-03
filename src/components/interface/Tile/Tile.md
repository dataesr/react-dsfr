```jsx
<Tile
    title="Tuile horizontale par défaut"
    description="Et verticale en desktop"
    imageAlt="un petit carré"
    imageSrc="https://place-hold.it/80x80"
    horizontal={true}
    verticalMedium={true}
    linkHref='/myPath'
/>
```

```jsx
<Tile
    title="Tuile verticale par défaut"
    description="Et horizontale en desktop"
    imageAlt="un petit carré"
    imageSrc="https://place-hold.it/80x80"
    horizontalMedium={true}
    linkHref='/myPath'
/>
```

#### Utilisation avec Container, Row, Col

```jsx
import Row from '../../foundation/grid/Row/Row';
import Container from '../../foundation/grid/Container/Container';
import Col from '../../foundation/grid/Col/Col';

<Container>
    <Row gutter={true}>
        <Col>
            <Tile
                titleAs="h5"
                title="Ceci est mon titre #1"
                imageAlt="un petit carré"
                imageSrc="https://place-hold.it/80x80"
                linkHref='/myPath'
            />
        </Col>
        <Col>
            <Tile
                titleAs="h5"
                title="Ceci est mon titre #2"
                description="Ceci est ma description"
                linkHref='/myPath'
            />
        </Col>
        <Col>
            <Tile
                titleAs="h5"
                title="Ceci est mon titre #3"
                imageAlt="un petit carré"
                imageSrc="https://place-hold.it/80x80"
                linkHref='/myPath'
            />
        </Col>
    </Row>
</Container>

```