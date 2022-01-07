import React from 'react';
import PropTypes from 'prop-types';

import dataAttributes from '../../../utils/data-attributes';
import typeValidation from '../../../utils/type-validation';

const FooterOperator = ({
  children,
  ...remainingProps
}) => (
  <div
    className="fr-footer__brand-link"
    {...dataAttributes.getAll(remainingProps)}
  >
    {children}
  </div>
);

FooterOperator.defaultProps = { __TYPE: 'FooterOperator' };

FooterOperator.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('FooterOperator'),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default FooterOperator;
