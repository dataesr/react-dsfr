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
        size="1x"
        color="#f88"
      >
        <p>With label</p>
      </Icon>
    </Col>
    <Col>
      <Icon
        name="ri-alert-fill"
        size="1x"
        title="Here is a title"
      />
    </Col>
  </>
);

export default IconsExample;
