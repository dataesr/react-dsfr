### Card

```jsx
import { Card, CardTitle, CardDescription, CardDetail, CardImage } from '.';

<Card href="/" scheme="soft-orange-dark">
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
```
La Carte peut etre horizontale sur les grands écrans
```jsx
import { Card, CardTitle, CardDescription, CardDetail, CardImage } from '.';
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
```

Utilisation avec Container, Row, Col
```jsx
import { Card, CardTitle, CardDescription, CardDetail, CardImage } from '.';
import Row from '../../foundation/grid/Row/Row';
import Container from '../../foundation/grid/Container/Container';
import Col from '../../foundation/grid/Col/Col';

<Container>
  <Row gutter={true}>
    <Col>
      <Card href="/">
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
    <Col>  
      <Card href="/">
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
    <Col>
      <Card href="/">
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
  </Row>
</Container>
```
