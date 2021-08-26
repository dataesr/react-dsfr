import React from 'react';

import {
  Col, Button, ButtonGroup,
} from '@dataesr/react-dsfr';

const ButtonExample = () => (
  <Col>
    <ButtonGroup isEquisized isInlineFrom="md">
      <Button
        submit
        icon="fr-fi-check-line"
      >
        Valider
      </Button>
      <Button
        secondary
        icon="fr-fi-close-line"
      >
        Annuler
      </Button>
    </ButtonGroup>
  </Col>
);

export default ButtonExample;
