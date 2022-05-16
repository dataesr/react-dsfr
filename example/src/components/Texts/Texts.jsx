import React from 'react';

import {
  Col, Text, Title, AltTitle, Row, Container,
} from '@dataesr/react-dsfr';

const TextsExample = () => (
  <Container>
    <Row>
      <Col>
        <Text bold size="xs">Text bold xs</Text>
        <Text size="md">Text md</Text>
        <Text size="lg">Text lg</Text>
      </Col>
      <Col>
        <Text size="lg">Text lg</Text>
      </Col>
      <Col n="12">
        <Title as="h4" look="h2">Title h4 looks h2</Title>
      </Col>
      <Col n="12">
        <AltTitle as="h4" size="xs">Alternative Title md</AltTitle>
      </Col>
    </Row>
  </Container>
);

export default TextsExample;
