import React from 'react';

import {
  Col, Callout, CalloutTitle, CalloutText, Button,
} from '@dataesr/react-dsfr';

const CalloutExample = () => (
  <>
    <Col>
      <Callout color="#f55">
        <CalloutTitle as="h3">Callout title</CalloutTitle>
        <CalloutText>Callout text that might be short and concise.</CalloutText>
      </Callout>
    </Col>
    <Col>
      <Callout>
        <CalloutTitle as="h3">Callout title</CalloutTitle>
        <CalloutText>Callout text that might be short and concise.</CalloutText>
        <Button title="acceder...">
          Accéder au service
        </Button>
      </Callout>
    </Col>
  </>
);

export default CalloutExample;
