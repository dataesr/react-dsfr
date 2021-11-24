import React, { useRef, useState } from 'react';

import {
  Button, Col, Container, Row,
} from '@dataesr/react-dsfr';

const ButtonExample = () => {
  const ref = useRef();
  const [isDisable, setIsDisable] = useState(true);
  const [isBg, setIsBg] = useState([]);

  const onAction = () => {
    if (isDisable) {
      setIsBg(['#f66', '#fff']);
    }
    setIsDisable(!isDisable);
  };

  return (
    <Container>
      <Row gutters>
        <Col n="12">
          <Button title="Update button" onClick={() => onAction()}>Update button</Button>
          <Button title="Disabled" disabled={isDisable} colors={isBg}>Disabled</Button>
        </Col>
        <Col n="12">
          <Button title="title">Button</Button>
        </Col>
        <Col n="12">
          <Button ref={ref} title="title" colors={['#008941', '#fff']}>Button colored</Button>
        </Col>
        <Col n="12">
          <Button icon="ri-alert-fill" iconPosition="right" title="title">icon on the right</Button>
        </Col>
        <Col n="12">
          <Button size="sm" secondary title="title">
            secondary sm button
          </Button>
        </Col>
        <Col n="12">
          <Button
            colors={['#008941', '#fff']}
            size="lg"
            secondary
            title="title"
          >
            secondary lg colored button
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ButtonExample;
