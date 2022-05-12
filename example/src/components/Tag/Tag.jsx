import React, { useState } from 'react';

import { Col, Tag, TagGroup } from '@dataesr/react-dsfr';

const TagExample = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Col>
      <TagGroup>
        <Tag>basic</Tag>
        <Tag selected={isSelected} onClick={() => setIsSelected(!isSelected)}>click me!</Tag>
        <Tag selected>Selected</Tag>
        <Tag small as="span">Label tag as span</Tag>
        <Tag icon="ri-arrow-right-line" iconPosition="left">Label tag icon left</Tag>
        <Tag small>Label tag small</Tag>
        <Tag small icon="ri-arrow-right-line">Label tag arrow</Tag>
        <Tag icon="ri-arrow-right-line" iconPosition="left">Label tag</Tag>
        <Tag href="/page-1">Tag link</Tag>
        <Tag
          closable
          onClick={() => {}}
        >
          Tag closable
        </Tag>
        <Tag small onClick={() => {}} colorFamily="green-bourgeon">
          Tag clickable colored
        </Tag>
        <Tag small onClick={() => {}} colorFamily="yellow-tournesol">
          Tag clickable colored
        </Tag>
      </TagGroup>
    </Col>
  );
};

export default TagExample;
