import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
  Col, Breadcrumb, BreadcrumbItem,
} from '@dataesr/react-dsfr';

const BreadcrumbsExample = () => (
  <Col>
    <Breadcrumb>
      <BreadcrumbItem
        asLink={<RouterLink to="/myBreadcrumbLink" />}
      >
        test #1
      </BreadcrumbItem>
      <BreadcrumbItem href="/path">
        test #2
      </BreadcrumbItem>
      <BreadcrumbItem>
        test #3
      </BreadcrumbItem>
    </Breadcrumb>
  </Col>
);

export default BreadcrumbsExample;
