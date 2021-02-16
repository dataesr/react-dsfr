### Column


```
import Container from '../Container';
import Row from '../Row';

<>
<Container m="m-2w">
  <Row alignItems="middle">
    <Col>JE SUIS UNE COLONE</Col>
    <Col>JE SUIS UNE COLONE</Col>
    <Col>JE SUIS UNE COLONE</Col>
    <Col>JE SUIS UNE COLONE</Col>
  </Row>
</Container>

<Container fluid m="m-2w">
  <Row alignItems="bottom">
    <Col offset="4">JE SUIS UNE COLONE dans un conteneur fluid et avec un offset de 4</Col>
    <Col>JE SUIS UNE COLONE et mon alignement m'est imposé par la Row</Col>
    <Col>JE SUIS UNE COLONE</Col>
  </Row>
</Container>

<Container fluid m="m-2w">
  <Row alignItems="bottom">
    <Col offset="3" n="6">JE SUIS UNE COLONE dans un conteneur fluid et avec un offset de 3 et une taille de 6. Du coup je suis bien centré.</Col>
  </Row>
</Container>

<Container fluid m="m-2w">
  <Row alignItems="bottom" justifyContent="center">
    <Col>JE SUIS UNE COLONE dans un conteneur fluid. J'ai pas de offset mais une taille de 6 et je suis seule dans ma row et elle m'a dit de m'aligner au centre. Du coup je suis bien centrée aussi.</Col>
  </Row>
</Container>
</>
```
