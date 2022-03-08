import React, { useState } from 'react';

import {
  Col, TextInput,
} from '@dataesr/react-dsfr';

const TextInputExample = () => {
  const [textValue1, setTextValue1] = useState('Value');
  const [textValue2, setTextValue2] = useState('Value');
  return (
    <Col>
      <TextInput
        value={textValue1}
        onChange={(e) => { setTextValue1(e.target.value); }}
        label="Text input"
        required
      />
      <TextInput
        value={textValue2}
        onChange={(e) => { setTextValue2(e.target.value); }}
        label="Text input with auto validation"
        pattern="[a-z]."
        required
        withAutoValidation
      />
    </Col>
  );
};

export default TextInputExample;
