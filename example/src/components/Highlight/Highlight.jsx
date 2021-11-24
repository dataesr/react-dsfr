import React from 'react';

import {
  Col, Highlight,
} from '@dataesr/react-dsfr';

const HighlightExample = () => (
  <>
    <Col>
      <Highlight size="sm" color="#f55">
        Mise en exergue
      </Highlight>
    </Col>
    <Col n="12">
      <Highlight size="lg">
        Highlight text that might be short and concise.
        Highlight text that might be short and concise.
        Highlight text that might be short and concise.
      </Highlight>
    </Col>
    <Col n="12">
      <Highlight colorFamily="green-bourgeon">
        Highlight with colorFamily text that might be short and concise.
      </Highlight>
    </Col>
  </>
);

export default HighlightExample;
