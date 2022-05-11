import React from 'react';
import {
  Col, Container, Row, Download, DownloadGroup,
} from '@dataesr/react-dsfr';

const DownloadExample = () => (
  <Container>
    <Row>
      <Col n="4">
        <Download label="Label" fileName="thisIsYourFile" metaData="jpeg" onNewTab />
      </Col>
      <Col n="8">
        <DownloadGroup title="Download Group Title">
          <Download label="Label 1" fileName="thisIsYourFile1" metaData="jpeg - 45Mo" onNewTab />
          <Download label="Label 2" fileName="thisIsYourFile2" metaData="jpeg - 12ko" onNewTab />
        </DownloadGroup>
      </Col>
    </Row>
  </Container>

);

export default DownloadExample;
