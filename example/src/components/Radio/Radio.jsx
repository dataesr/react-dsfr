import React, { useState } from 'react';

import {
  Row, Col, Radio, RadioGroup,
} from '@dataesr/react-dsfr';

const RadioExample = () => {
  const [value, setValue] = useState('value-2');
  return (
    <Col>
      <Row>
        <Col>
          <h3>Non controllé</h3>
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
              defaultChecked
            />
            <Radio
              label="Disabled radio"
              onChange={() => {
              }}
              value="value-4"
              disabled
            />
          </RadioGroup>
        </Col>
        <Col>
          <h3>Controllé</h3>
          <RadioGroup
            legend="Légende pour l’ensemble de champs"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
          >
            <Radio
              label="Label radio 1"
              value="value-1"
            />
            <Radio
              label="Label radio 2"
              value="value-2"
            />
            <Radio
              label="Label radio 3"
              value="value-3"
            />
          </RadioGroup>
        </Col>
      </Row>
    </Col>
  );
};

export default RadioExample;
