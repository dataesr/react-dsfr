import React from 'react';

import {
  Col, Toggle,
} from '@dataesr/react-dsfr';

const ToggleExample = () => (
  <>
    <Col>
      <Toggle
        onChange={() => { }}
        disabled
        checked
        label="Toggle Label"
        description="Toggle descirption"
      />
    </Col>
    <Col>
      <Toggle
        onChange={() => { }}
        label="Toggle Label"
        description="Toggle descirption"
      />
    </Col>
    <Col>
      <Toggle
        toggleColor="#f66"
        label="Toggle Colored Label"
        description="Toggle description"
      />
    </Col>
  </>
);

export default ToggleExample;
