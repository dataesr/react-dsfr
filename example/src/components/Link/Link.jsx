import React from 'react';

import {
  Col, Link,
} from '@dataesr/react-dsfr';

const LinkExample = () => (
  <Col>
    <Link title="title" href="/#">Link</Link>
    <br />
    <Link title="title" to="/">Link</Link>
  </Col>
);

export default LinkExample;
