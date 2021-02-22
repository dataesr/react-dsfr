Le système de grille sur 12 colonnes proposée par le Design System vous permet de structurer vos contenus. Il met à disposition 5 mises en page, basées sur 4 points de rupture:
  - `xs`: de 0 à 575px
  - `sm`: de 576px à 676px
  - `md`: de 768px à 991px
  - `lg`: de 992px à 1247px
  - `xl`: ≥ 1248px

Par défaut la grille est proposée sans gouttière, et avec des marges externes dans le code. Vous pouvez néanmoins utiliser les props des composants pour:
  - ajouter les gouttières de la grille  
  - supprimer les marges externes
  - adapter la largeur et l’affichage de vos blocs de contenu
  - adapter les alignements

### Règle d'utilisation

Pour que la grille s’affiche correctement, il faut respecter la structure : `<Container />` ou `<Container fluid/>` contenant une ou plusieurs `<Row />` qui elles mêmes contiennent des `<Col />`.

### Examples

```jsx
import Container from './Container';
import Row from './Row';
import Col from './Col';

<Container>
  <Row alignItems="middle">
    <Col>JE SUIS UNE COLONE</Col>
    <Col>JE SUIS UNE COLONE</Col>
    <Col>JE SUIS UNE COLONE</Col>
    <Col>JE SUIS UNE COLONE</Col>
  </Row>
</Container>
```

```jsx
import Container from './Container';
import Row from './Row';
import Col from './Col';

<Container fluid>
  <Row alignItems="bottom" justifyContent="center">
    <Col>JE SUIS UNE COLONE dans un conteneur fluid. J'ai pas de offset mais une taille de 6 et je suis seule dans ma row et elle m'a dit de m'aligner au centre. Du coup je suis bien centrée aussi.</Col>
  </Row>
</Container>
```

```jsx
import Container from './Container';
import Row from './Row';
import Col from './Col';

<Container fluid>
  <Row alignItems="bottom">
    <Col offset="4">JE SUIS UNE COLONE dans un conteneur fluid et avec un offset de 4</Col>
    <Col>JE SUIS UNE COLONE et mon alignement m'est imposé par la Row</Col>
    <Col>JE SUIS UNE COLONE</Col>
  </Row>
</Container>
```
