import React from 'react';

import {
  Col, Icon,
} from '@dataesr/react-dsfr';

const IconsExample = () => (
  <>
    <Col>
      <Icon
        verticalAlign="middle"
        name="ri-bubble-chart-line"
        size="lg"
        color="#f88"
      >
        <p>With label</p>
      </Icon>
    </Col>
    <Col>
      <Icon
        name="ri-alert-fill"
        size="2x"
        title="Here is a title"
      />
    </Col>
  </>
);

export default IconsExample;
