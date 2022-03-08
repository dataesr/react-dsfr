## Card - carte

By default, Card component is in grey mode with `fr-card--grey` class.

> href props is mandatory with custom onClick props to have a clickable card component.

```jsx
import { Card, CardTitle, CardDescription, CardDetail, CardImage } from '.';

<Card href="/">
  <CardImage alt="alternative" src="http://fakeimg.pl/300/" />
  <CardDetail>Detail</CardDetail>
  <CardTitle>
      Card Title
  </CardTitle>
  <CardDescription>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Uenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </CardDescription>
</Card>
```
La Carte peut etre horizontale sur les grands écrans
```jsx
import { Card, CardTitle, CardDescription, CardDetail, CardImage } from '.';
<Card href="/" isHorizontal>
  <CardImage alt="alternative" src="http://fakeimg.pl/300/" />
  <CardDetail>Detail</CardDetail>
  <CardTitle>
    Card Title
  </CardTitle>
  <CardDescription>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Uenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </CardDescription>
</Card>
```
Zone de click réduite au titre, sans flèche indicative
```jsx
import { Card, CardTitle, CardDescription, CardDetail, CardImage } from '.';
<Card href="/" isHorizontal>
  <CardImage alt="alternative" src="http://fakeimg.pl/300/" enlargeLink={false} hasArrow={false}/>
  <CardDetail>Detail</CardDetail>
  <CardTitle>
    Card Title
  </CardTitle>
  <CardDescription>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Uenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </CardDescription>
</Card>
```

Utilisation avec Container, Row, Col

```jsx
import { Card, CardTitle, CardDescription, CardDetail, CardImage } from '.';
import Row from '../../foundation/grid/Row';
import Container from '../../foundation/grid/Container';
import Col from '../../foundation/grid/Col';

<Container>
    <Row>
        <Col>
            <Card href="/">
                <CardImage alt="alternative" src="http://fakeimg.pl/300/"/>
                <CardDetail>Detail</CardDetail>
                <CardTitle>
                    Card Title
                </CardTitle>
                <CardDescription>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Uenim ad minim veniam.
                </CardDescription>
            </Card>
        </Col>
        <Col>
            <Card href="/">
                <CardImage alt="alternative" src="http://fakeimg.pl/300/"/>
                <CardDetail>Detail</CardDetail>
                <CardTitle>
                    Card Title
                </CardTitle>
                <CardDescription>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Uenim ad minim veniam.
                </CardDescription>
            </Card>
        </Col>
        <Col>
            <Card href="/">
                <CardImage alt="alternative" src="http://fakeimg.pl/300/"/>
                <CardDetail>Detail</CardDetail>
                <CardTitle>
                    Card Title
                </CardTitle>
                <CardDescription>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Uenim ad minim veniam.
                </CardDescription>
            </Card>
        </Col>
    </Row>
</Container>
```
