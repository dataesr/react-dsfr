import React from 'react';

import {
  Col, Highlight,
} from '@dataesr/react-dsfr';

const HighlightExample = () => (
  <>
    <Col>
      <Highlight size="sm" scheme="soft-green-warm">
        Highlight text that might be short and concise.
        Highlight text that might be short and concise.
        Highlight text that might be short and concise.
      </Highlight>
    </Col>
    <Col>
      <Highlight size="lg">
        Highlight text that might be short and concise.
        Highlight text that might be short and concise.
        Highlight text that might be short and concise.
      </Highlight>
    </Col>
  </>
);

export default HighlightExample;
