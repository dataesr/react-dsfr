import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

/*
* DSFR v1.3.1
*/
import '@gouvfr/dsfr/dist/component/skiplink/skiplink.css';

/**
 *
 * @visibleName Skiplinks
 */
const Skiplinks = ({ children, className, ...remainingProps }) => (
  <div
    className={classNames('fr-skiplinks', className)}
    {...dataAttributes.getAll(remainingProps)}
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
