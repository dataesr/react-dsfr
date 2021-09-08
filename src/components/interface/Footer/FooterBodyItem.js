import React from 'react';
import PropTypes from 'prop-types';
import dataAttributes from '../../../utils/data-attributes';
import typeValidation from '../../../utils/type-validation';

const FooterBodyItem = ({
  children, ...remainingProps
}) => (
  <li
    className="fr-footer__content-item"
    {...dataAttributes.getAll(remainingProps)}
  >
    <div className="fr-footer__content-link">
      {children}
    </div>
  </li>
);
FooterBodyItem.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('FooterBodyItem'),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
FooterBodyItem.defaultProps = {
  __TYPE: 'FooterBodyItem',
};

export default FooterBodyItem;
