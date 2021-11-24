import React from 'react';

import {
  Col, Tag, TagGroup,
} from '@dataesr/react-dsfr';

const TagExample = () => (
  <Col>
    <TagGroup>
      <Tag size="sm" as="span">Label tag</Tag>
      <Tag size="sm" as="span" icon="ri-arrow-right-line" iconPosition="left">Label tag</Tag>
      <Tag size="sm" as="span" icon="ri-arrow-right-line">Label tag</Tag>
      <Tag size="sm" as="span">Label tag</Tag>
      <Tag size="sm" as="span" icon="ri-arrow-right-line">Label tag</Tag>
      <Tag size="sm" as="span" icon="ri-check-line" />
      <Tag href="/" colorFamily="pink-tuile" icon="ri-arrow-right-line" iconPosition="left">Label tag with colorFamily</Tag>
    </TagGroup>
  </Col>
);

export default TagExample;
