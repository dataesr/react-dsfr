import React from 'react';
import {
  Col, Container, Row, Download, DownloadGroup,
} from '@dataesr/react-dsfr';

const DownloadExample = () => (
  <Container>
    <Row>
      <Col n="4">
        <Download label="React Favicon" file="./favicon.ico" />
      </Col>
      <Col n="4">
        <Download label="React Favicon" file="./favicon.ico" asCard description="This is the description" />
      </Col>
      <Col n="12">
        <DownloadGroup title="Group Title">
          <Download label="Open React Favicon" file="./favicon.ico" openFile />
          <Download label="Download React Favicon" file="./favicon.ico" metaData="custom" />
        </DownloadGroup>
      </Col>
    </Row>
  </Container>

);

export default DownloadExample;
