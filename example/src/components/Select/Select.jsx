import React, { useState } from 'react';

import {
  Col, Select,
} from '@dataesr/react-dsfr';

const options = [
  {
    value: '', label: '- Select -', disabled: true, hidden: true,
  },
  { value: '1', label: 'Burgers & sandwiches' }, { value: '2', label: 'Build your own' },
  { value: '3', label: 'Friendly meals' },
  { value: '4', label: 'Save menu & more' },
];

const SelectExample = () => {
  const [selectValue1, setSelectValue1] = useState('');
  const [selectValue2, setSelectValue2] = useState('');
  return (
    <Col>
      <Select
        label="Label pour liste déroulante"
        selected={selectValue1}
        onChange={(e) => { setSelectValue1(e.target.value); }}
        options={options}
      />
      <Select
        label="Label pour liste déroulante"
        options={options}
        selected={selectValue2}
        onChange={(e) => { setSelectValue2(e.target.value); }}
        message="Texte d'erreur obligatoire"
        messageType="error"
      />
    </Col>
  );
};

export default SelectExample;
