import React from 'react';

import {
  Container, Row, Col, Callout, CalloutTitle, CalloutText, Button,
} from '@dataesr/react-dsfr';

const CalloutExample = () => (
  <Container fluid>
    <Row gutters>
      <Col n="12" spacing="py-2w">
        <Callout>
          <CalloutTitle>Mise en avant</CalloutTitle>
          <CalloutText>Callout text that might be short and concise.</CalloutText>
        </Callout>
      </Col>
      <Col>
        <Callout colors={['#f13d3d', '#ffb0b0']}>
          <CalloutTitle as="h5" size="lg">Callout Custom Colored</CalloutTitle>
          <CalloutText size="lg">Callout text that might be short and concise.</CalloutText>
        </Callout>
      </Col>
      <Col>
        <Callout colorFamily="beige-gris-galet">
          <CalloutTitle as="h5" size="lg">Callout themed</CalloutTitle>
          <CalloutText size="lg">Callout text that might be short and concise.</CalloutText>
        </Callout>
      </Col>
      <Col>
        <Callout>
          <CalloutTitle as="h3" size="xs">Callout title</CalloutTitle>
          <CalloutText size="xl">Callout text that might be short and concise.</CalloutText>
          <Button title="acceder...">
            Accéder au service
          </Button>
        </Callout>
      </Col>
    </Row>
  </Container>
);

export default CalloutExample;
