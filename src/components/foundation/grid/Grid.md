##### [Fondamentaux techniques du DS de l'État](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/603882709/Fondamentaux+techniques)

### Règle d'utilisation

Pour que la grille s’affiche correctement, il faut respecter la structure : `<Container />` contenant une ou plusieurs `<Row />` qui elles mêmes contiennent des `<Col />`.

#### Grille simple
```jsx
import Container from './Container';
import Row from './Row';
import Col from './Col';

<Container spacing="m-4w">
  <Row alignItems="middle" spacing="p-4w">
    <Col spacing="p-2w m-6w">Column #1</Col>
    <Col>Column #2</Col>
    <Col>Column #3</Col>
    <Col>Column #4</Col>
  </Row>
</Container>
```

#### Grille avec Container fluid et gouttières
```jsx
import Container from './Container';
import Row from './Row';
import Col from './Col';

<Container fluid>
  <Row justifyContent="center" gutters>
    <Col>Column #1</Col>
    <Col spacing="ml-auto">Column #2</Col>
  </Row>
</Container>
```

#### Grille avec alignement vertical
```jsx
import Container from './Container';
import Row from './Row';
import Col from './Col';

<Container>
  <Row alignItems="middle">
    <Col>Column #1</Col>
    <Col n="6">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Col>
    <Col>Column #3</Col>
  </Row>
</Container>
```


#### Grille avec offsets
```jsx
import Container from './Container';
import Row from './Row';
import Col from './Col';

<Container>
  <Row>
    <Col offset="4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Col>
  </Row>
  <Row>
      <Col offset="2">Column #1</Col>
      <Col>Column #2</Col>
  </Row>
</Container>
```
