import React from 'react';
import PropTypes from 'prop-types';

import dataAttributes from '../../../utils/data-attributes';
import typeValidation from '../../../utils/type-validation';

import '@gouvfr/dsfr/dist/css/header.min.css';

/**
 *
 * @visibleName HeaderOperator
 */

const HeaderOperator = ({
  children,
  ...remainingProps
}) => (
  <div
    className="fr-header__operator"
    {...dataAttributes.getAll(remainingProps)}
  >
    {children}
  </div>
);

HeaderOperator.defaultProps = { __TYPE: 'HeaderOperator' };

HeaderOperator.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('HeaderOperator'),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default HeaderOperator;
