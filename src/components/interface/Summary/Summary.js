import React from 'react';
import PropTypes from 'prop-types';
import dataAttributes from '../../../utils/data-attributes';

import './summary.css';

/**
 *
 * @visibleName Summary
 */
const Summary = ({ title, children, ...remainingProps }) => (
  <nav
    className="fr-summary"
    role="navigation"
    aria-labelledby="fr-summary-title"
    {...dataAttributes(remainingProps)}
  >
    <div className="fr-summary__title">{title}</div>
    <ol className="fr-summary__list">
      {children}
    </ol>
  </nav>
);

Summary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  title: PropTypes.string.isRequired,
};

export default Summary;
