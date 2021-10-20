import React from 'react';

import {
  Col, Accordion, AccordionItem,
} from '@dataesr/react-dsfr';

const AccordionExample = () => (
  <Col>
    <Accordion keepOpen size="sm" color="#f66">
      <AccordionItem title="title">Test</AccordionItem>
      <AccordionItem title="title">Test</AccordionItem>
      <AccordionItem title="title">Test</AccordionItem>
      <AccordionItem initExpand title="title">Test</AccordionItem>
    </Accordion>
  </Col>
);

export default AccordionExample;
