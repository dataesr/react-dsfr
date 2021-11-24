import React, { useState } from 'react';

import { Checkbox, CheckboxGroup, Col } from '@dataesr/react-dsfr';

const CheckboxExample = () => {
  const [isChecked, setIsChecked] = useState(true);

  return (
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
        checkboxColors={['#f99', '#000']}
        ariaLabel="With colors"
        legend="With colors"
        message="test"
        messageType="valid"
      >
        <Checkbox
          checked={isChecked}
          label="Label checkbox 2"
          onChange={() => setIsChecked(!isChecked)}
          value="value-2"
        />
        <Checkbox
          label="Label checkbox 2"
          value="value-3"
        />
      </CheckboxGroup>
    </Col>
  );
};

export default CheckboxExample;
