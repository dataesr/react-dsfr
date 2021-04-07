import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '@gouvfr/dsfr/dist/css/skiplinks.min.css';

/**
 * Les liens d’évitement permettent aux utilisateurs naviguant au clavier,
 * ou équipés de lecteurs d'écran, d’accéder plus rapidement à des zones précises de la page.
 *
 * @visibleName Skiplinks
 */
const Skiplinks = ({ children, className }) => (
  <div data-testid="skiplinks" className={classNames('rf-skiplinks', className)}>
    <div className="rf-container">
      <ul className="rf-skiplinks__list">
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
