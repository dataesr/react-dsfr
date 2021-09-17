import React from 'react';

import { Checkbox, CheckboxGroup, Col } from '@dataesr/react-dsfr';

const CheckboxExample = () => (
  <Col>
    <CheckboxGroup
      ariaLabel="This is the aria label"
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
    <CheckboxGroup
      colors={['#f99', '#000']}
      ariaLabel="With colors"
      legend="With colors"
    >
      <Checkbox
        checked
        label="Label checkbox 2"
        onChange={() => {
        }}
        value="value-2"
      />
    </CheckboxGroup>
  </Col>
);

export default CheckboxExample;
