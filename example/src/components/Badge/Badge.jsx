import React from 'react';

import {
  Col, Badge, BadgeGroup, Container, Row,
} from '@dataesr/react-dsfr';

const BadgeExample = () => (
  <Container>
    <Row>
      <Col>
        <Badge
          type="success"
          text="Success"
        />
      </Col>
      <Col>
        <Badge
          type="error"
          text="Error"
        />
      </Col>
      <Col>
        <Badge
          type="warning"
          icon={false}
          small
          text="warning"
        />
      </Col>
      <Col spacing="mx-2w">
        <Badge
          type="info"
          text="Information"
        />
      </Col>
      <Col>
        <Badge
          text="Small custom color badge"
          small
          colorFamily="green-bourgeon"
        />
      </Col>
    </Row>
    <Col>
      <Row>
        <BadgeGroup>
          <Badge
            text="No system #1"
            small
          />
          <Badge
            text="No system #2"
            small
          />
        </BadgeGroup>
      </Row>
    </Col>
  </Container>
);

export default BadgeExample;
