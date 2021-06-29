import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Col, Link as DSLink,
} from '@dataesr/react-dsfr';

const LinkExample = () => (
  <>
    <Col>
      <DSLink title="title" href="/#">Link</DSLink>
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
