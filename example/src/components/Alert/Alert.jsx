import React from 'react';

import {
  Col, Alert,
} from '@dataesr/react-dsfr';

const AlertExample = () => (
  <Col>
    <Alert
      type="success"
      title="Information"
      description="Ceci est une super alerte"
    />
    <Alert
      title="Information"
      description="Ceci est une super alerte"
      closable
    />
    <Alert
      type="error"
      description="Error"
      small
    />
    <Alert
      type="warning"
      description="Warning !!!!"
    />
    <Alert
      type="new"
      description="Awesome news"
    />
  </Col>
);

export default AlertExample;
