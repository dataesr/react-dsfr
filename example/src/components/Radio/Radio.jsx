import React from 'react';

import {
  Col, Radio, RadioGroup,
} from '@dataesr/react-dsfr';

const RadioExample = () => (
  <Col>
    <Col>
      <RadioGroup
        legend="Légende pour l’ensemble de champs"
      >
        <Radio
          label="Label radio 1"
          onChange={() => {
          }}
          value="value-1"
        />
        <Radio
          label="Label radio 2"
          onChange={() => {
          }}
          value="value-2"
        />
        <Radio
          label="Label radio 3"
          onChange={() => {
          }}
          value="value-3"
        />
      </RadioGroup>
    </Col>
  </Col>
);

export default RadioExample;
