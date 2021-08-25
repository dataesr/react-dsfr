import React from 'react';

import {
  Col, Checkbox, CheckboxGroup,
} from '@dataesr/react-dsfr';

const CheckboxExample = () => (
  <Col>
    <CheckboxGroup
      ariaLabel="This is aia label"
      legend="This is the legend"
    >
      <Checkbox
        label="Label checkbox 1"
        onChange={() => {
        }}
        value="value-1"
      />
      <Checkbox
        label="Label checkbox 2"
        onChange={() => {
        }}
        value="value-2"
      />
    </CheckboxGroup>
  </Col>
);

export default CheckboxExample;
