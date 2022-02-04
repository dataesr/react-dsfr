import React, { useState } from 'react';

import { Col, Tag, TagGroup } from '@dataesr/react-dsfr';

const TagExample = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Col>
      <TagGroup>
        <Tag selected={isSelected} onClick={() => setIsSelected(!isSelected)}>click me!</Tag>
        <Tag selected>Selected</Tag>
        <Tag small as="span">Label tag as span</Tag>
        <Tag icon="ri-arrow-right-line" iconPosition="left">Label tag icon left</Tag>
        <Tag small>Label tag small</Tag>
        <Tag small icon="ri-arrow-right-line">Label tag arrow</Tag>
        <Tag small icon="ri-check-line" />
        <Tag icon="ri-arrow-right-line" iconPosition="left">Label tag</Tag>
        <Tag href="/page-1">Tag link</Tag>
        <Tag
          closable
          onClick={() => {}}
        >
          Tag closable
        </Tag>
        <Tag small onClick={() => {}}>
          Tag clickable
        </Tag>
      </TagGroup>
    </Col>
  );
};

export default TagExample;
