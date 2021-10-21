import React from 'react';

import {
  Col, Callout, CalloutTitle, CalloutText, Button,
} from '@dataesr/react-dsfr';

const CalloutExample = () => (
  <>
    <Col>
      <Callout colors={['#f13d3d', '#ffb0b0']}>
        <CalloutTitle as="h5" size="lg">Callout title</CalloutTitle>
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
  </>
);

export default CalloutExample;
