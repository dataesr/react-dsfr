import React from 'react';

import {
  Col, Badge, BadgeGroup, Container, Row,
} from '@dataesr/react-dsfr';

const BadgeExample = () => (
  <Container>
    <Row>
      <Col>
        <Badge
          hasIcon
          type="success"
          text="Success"
        />
      </Col>
      <Col>
        <Badge
          hasIcon
          type="error"
          text="Error"
        />
      </Col>
      <Col>
        <Badge
          type="warning"
          hasIcon={false}
          small
          text="warning"
        />
      </Col>
      <Col spacing="mx-2w">
        <Badge
          hasIcon
          type="info"
          text="Information"
        />
      </Col>
      <Col>
        <Badge
          text="Small custom colored badge"
          isSmall
          colorFamily="green-bourgeon"
          icon="ri-lightbulb-flash-line"
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
