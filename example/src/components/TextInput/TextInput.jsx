import React, { useState } from 'react';

import {
  Col, TextInput,
} from '@dataesr/react-dsfr';

const TextInputExample = () => {
  const [textValue, setTextValue] = useState('Value');
  return (
    <Col>
      <TextInput
        value={textValue}
        onChange={(e) => { setTextValue(e.target.value); }}
        label="Text input"
      />
    </Col>
  );
};

export default TextInputExample;
