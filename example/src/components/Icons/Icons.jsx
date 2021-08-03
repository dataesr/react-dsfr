import React from 'react';

import {
  Col, Icon,
} from '@dataesr/react-dsfr';

const IconsExample = () => (
  <>
    <Col>
      <Icon
        name="ri-bubble-chart-line"
        size="1x"
      >
        <p>With label</p>
      </Icon>
    </Col>
    <Col>
      <Icon
        name="ri-alert-fill"
        size="1x"
      />
    </Col>
  </>
);

export default IconsExample;
