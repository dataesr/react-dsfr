import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './skiplinks.css';

/**
 *
 * @visibleName Skiplinks
 */
const Skiplinks = ({ children, className }) => (
  <div
    className={classNames('fr-skiplinks', className)}
    data-testid="skiplinks"
  >
    <div className="fr-container">
      <ul className="fr-skiplinks__list">
        {children}
      </ul>
    </div>
  </div>
);

Skiplinks.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
Skiplinks.defaultProps = {
  className: '',
};
export default Skiplinks;
