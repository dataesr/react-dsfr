import React, { useState } from 'react';

import { Col, TextInput } from '@dataesr/react-dsfr';

const TextInputExample = () => {
  const [textValue1, setTextValue1] = useState('Value');
  const [textValue2, setTextValue2] = useState('Value');
  const [textValue3, setTextValue3] = useState('wtf');

  return (
    <Col>
      <TextInput
        placeholder="Value"
      />
      <TextInput
        message="Valid"
        messageType="valid"
        value={textValue1}
        onChange={(e) => {
          setTextValue1(e.target.value);
        }}
        label="Text input"
        required
      />
      <TextInput
        value={textValue2}
        onChange={(e) => {
          setTextValue2(e.target.value);
        }}
        label="Text input with auto validation"
        pattern="[a-z]."
        required
        withAutoValidation
      />
      <TextInput
        hint="Hint"
        message="Error"
        messageType="error"
        value={textValue3}
        onChange={(e) => {
          setTextValue3(e.target.value);
        }}
        label="Text input with warning"
      />
      <TextInput
        type="date"
        label="Date input"
      />
      <TextInput
        type="number"
        label="Number input"
      />
      <TextInput
        required
        hint="Must contain letters and numbers"
        type="password"
        label="Password"
      />
      <TextInput
        hint="This is a textarea"
        required
        rows="3"
        textarea
      />
    </Col>
  );
};

export default TextInputExample;
