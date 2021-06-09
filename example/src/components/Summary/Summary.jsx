import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
  Col, Summary, SummaryItem,
} from '@dataesr/react-dsfr';

const SummaryExample = () => (
  <Col>
    <Summary title="Sommaire">
      <SummaryItem asLink={<RouterLink to="/mySummaryItem" />}>Item 1</SummaryItem>
      <SummaryItem href="#">Item 2</SummaryItem>
      <SummaryItem href="#">Item 3</SummaryItem>
      <SummaryItem href="#">Item 4</SummaryItem>
    </Summary>
  </Col>
);

export default SummaryExample;
