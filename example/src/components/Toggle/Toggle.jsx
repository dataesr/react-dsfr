import React from 'react';

import {
  Col, Toggle,
} from '@dataesr/react-dsfr';

const ToggleExample = () => (
  <Col>
    <Toggle
      onChange={() => { }}
      disabled
      checked
      label="Toggle Label"
      description="Toggle descirption"
    />
  </Col>
);

export default ToggleExample;
