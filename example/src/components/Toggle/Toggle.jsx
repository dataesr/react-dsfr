import React, { useState } from 'react';

import { Col, Toggle } from '@dataesr/react-dsfr';

const ToggleExample = () => {
  const [toggleCheck, setToggleCheck] = useState(true);

  return (
    <>
      <Col>
        <Toggle
          onChange={() => setToggleCheck(!toggleCheck)}
          checked={toggleCheck}
          label="Toggle Label"
          description="Toggle description"
        />
      </Col>
      <Col>
        <Toggle
          onChange={() => {
          }}
          label="Toggle Label"
          description="Toggle descirption"
        />
      </Col>
      <Col>
        <Toggle
          toggleColor="#f66"
          label="Toggle Colored Label"
          description="Toggle description"
        />
      </Col>
    </>
  );
};

export default ToggleExample;
