import React from 'react';

import PropTypes from 'prop-types';
import { Title, Row } from '@dataesr/react-dsfr';

const Element = ({ title, children }) => (
  <>
    <Title as="h3">{title}</Title>
    <Row>
      {children}
    </Row>
  </>
);

Element.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
    PropTypes.func,
  ]).isRequired,
  title: PropTypes.string.isRequired,
};

export default Element;
