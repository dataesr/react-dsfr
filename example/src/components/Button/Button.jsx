import React, { useRef } from 'react';

import {
  Col, Button,
} from '@dataesr/react-dsfr';

const ButtonExample = () => {
  const ref = useRef();

  return (
    <>
      <Col>
        <Button title="Disabled" disabled>Disabled</Button>
      </Col>
      <Col>
        <Button title="title">Button</Button>
      </Col>
      <Col>
        <Button ref={ref} title="title" colors={['#008941', '#fff']}>Button colored</Button>
      </Col>
      <Col>
        <Button icon="ri-alert-fill" iconPosition="right" title="title">icon on the right</Button>
      </Col>
      <Col>
        <Button size="sm" secondary title="title">
          secondary sm button
        </Button>
      </Col>
      <Col>
        <Button
          colors={['#008941', '#fff']}
          size="lg"
          secondary
          title="title"
        >
          secondary lg colored button
        </Button>
      </Col>
    </>
  );
};

export default ButtonExample;
