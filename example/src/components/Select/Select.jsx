import React, { useState } from 'react';

import {
  Col, Select, TextInput,
} from '@dataesr/react-dsfr';

const options = [
  {
    value: '', label: '- Select -', disabled: true, hidden: true,
  },
  { value: '1', label: 'Burgers &amp; sandwiches' }, { value: '2', label: 'Build your own' },
  { value: '3', label: 'Friendly meals' },
  { value: '4', label: 'Save menu &amp; more' },
];

const SelectExample = () => {
  const [v, setV] = useState('');
  return (
    <Col>
      <Select
        selected={v}
        label="Label pour liste déroulante"
        options={options}
        onChange={(e) => {
          setV(e.target.value);
        }}
      />
      <Select
        label="Label pour liste déroulante"
        options={options}
        message="Texte d'erreur obligatoire"
        messageType="error"
      />

      <TextInput
        value="Value"
        onChange={() => {
        }}
        label="Text input"
      />
    </Col>
  );
};

export default SelectExample;
