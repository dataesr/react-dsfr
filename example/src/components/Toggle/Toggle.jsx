import React from 'react';

import {
  Col, Toggle,
} from '@dataesr/react-dsfr';

const ToggleExample = () => (
  <Col>
    <Toggle
      onChange={() => {
        console.log('==== Change Toggle ==== ');
      }}
      isDisabled
      isChecked
      label="Toggle Label"
      description="Toggle descirption"
    />
  </Col>
);

export default ToggleExample;
