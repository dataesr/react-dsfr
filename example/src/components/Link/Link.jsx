import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Col, Link as DSLink,
} from '@dataesr/react-dsfr';

const LinkExample = () => (
  <>
    <Col n="12">
      <DSLink
        className="custom-link"
        icon="ri-arrow-right-line"
        iconPosition="right"
        iconSize="lg"
        href="/page-1"
        size="sm"
      >
        Small link icon on the right
      </DSLink>
    </Col>
    <Col>
      <DSLink size="lg" title="title" href="/#" target="_blank">Large link target blank</DSLink>
    </Col>
    <Col n="12">
      <DSLink title="title">Link disabled</DSLink>
    </Col>
    <Col>
      <DSLink title="title" as={<RouterLink to="/my-path" />}>
        Internal Router Dom Link
      </DSLink>
    </Col>
    <Col>
      <DSLink title="title" as={<RouterLink to="/page-1" />}>
        Page 1
      </DSLink>
    </Col>
  </>
);

export default LinkExample;
