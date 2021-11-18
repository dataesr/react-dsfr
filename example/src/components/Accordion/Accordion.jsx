import React from 'react';

import {
  Col, Accordion, AccordionItem, Icon,
} from '@dataesr/react-dsfr';

const AccordionExample = () => (
  <Col>
    <Accordion keepOpen size="sm" color="#f66">
      <AccordionItem title={(
        <Icon
          name="ri-bubble-chart-line"
          size="lg"
          color="#f88"
          iconPosition="right"
          verticalAlign
        >
          With icon
        </Icon>
)}
      >
        Test
      </AccordionItem>
      <AccordionItem title="title">Test</AccordionItem>
      <AccordionItem title="title">Test</AccordionItem>
      <AccordionItem initExpand title="title">Test</AccordionItem>
    </Accordion>
  </Col>
);

export default AccordionExample;
