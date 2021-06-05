import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
  Col, Skiplinks, SkiplinkItem,
} from '@dataesr/react-dsfr';

const SkiplinksExample = () => (
  <Col>
    <Skiplinks>
      <SkiplinkItem asLink={<RouterLink to="/mySkiplinkItem" />}>Accéder au contenu</SkiplinkItem>
      <SkiplinkItem href="#">Accéder au menu</SkiplinkItem>
      <SkiplinkItem href="#">Accéder à la recherche</SkiplinkItem>
      <SkiplinkItem href="#">Accéder au footer</SkiplinkItem>
    </Skiplinks>
  </Col>
);

export default SkiplinksExample;
