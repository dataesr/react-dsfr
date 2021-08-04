import React from 'react';

import {
  Col, Text, Title, TitleDisplay,
} from '@dataesr/react-dsfr';

const TextsExample = () => (
  <>
    <Col>
      <Text size="xs">Text xs</Text>
      <Title as="h4">Title h4</Title>
    </Col>
    <Col>
      <Text size="lg">Text lg</Text>
    </Col>
    <Col>
      <TitleDisplay as="h1" size="sm">Title sm</TitleDisplay>
    </Col>
  </>
);

export default TextsExample;
