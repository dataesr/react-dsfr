import React from 'react';

import {
  Col, Button,
} from '@dataesr/react-dsfr';

const ButtonExample = () => (
  <>
    <Col>
      <Button title="title">Button</Button>
    </Col>
    <Col>
      <Button icon="ri-alert-fill" iconPosition="right" title="title">icon on the right</Button>
    </Col>
    <Col>
      <Button size="sm" secondary title="title">
        secondary sm button
      </Button>
    </Col>
  </>
);

export default ButtonExample;
