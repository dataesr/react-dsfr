import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import typeValidation from '../../../utils/type-validation';

const CardDetail = ({ children, className, ...remainingProps }) => (
  <p
    className={classNames('fr-card__detail', className)}
    {...dataAttributes(remainingProps)}
  >
    {children}
  </p>
);
CardDetail.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('CardDetail'),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
CardDetail.defaultProps = {
  __TYPE: 'CardDetail',
  className: '',
};

export default CardDetail;
