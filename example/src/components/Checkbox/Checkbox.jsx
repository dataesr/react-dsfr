import React, { useState } from 'react';

import { Checkbox, CheckboxGroup, Col } from '@dataesr/react-dsfr';

const CheckboxExample = () => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <Col>
      <CheckboxGroup
        isInline
        ariaLabel="This is the aria label"
        legend="This is the legend"
        required
      >
        <Checkbox
          label="Label checkbox 1"
          onChange={() => {
          }}
          value="value-1"
        />
        <Checkbox
          disabled
          label="Label checkbox disabled"
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
        hint="This is the hint"
        messageType="valid"
      >
        <Checkbox
          checked={isChecked}
          label="Label checkbox 2"
          onChange={() => setIsChecked(!isChecked)}
          value="value-2"
          hint="Careful"
        />
        <Checkbox
          label="Label checkbox 3"
          value="value-3"
        />
      </CheckboxGroup>
    </Col>
  );
};

export default CheckboxExample;
