import React from 'react';

import {
  Col, Breadcrumb, BreadcrumbItem,
} from '@dataesr/react-dsfr';

const BreadcrumbsExample = () => (
  <Col>
    <Breadcrumb>
      <BreadcrumbItem to="/myBreadcrumbLink">test #1</BreadcrumbItem>
      <BreadcrumbItem to="/path">test #2</BreadcrumbItem>
      <BreadcrumbItem>test #3</BreadcrumbItem>
    </Breadcrumb>
  </Col>
);

export default BreadcrumbsExample;
