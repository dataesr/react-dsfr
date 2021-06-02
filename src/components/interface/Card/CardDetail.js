import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

const CardDetail = ({ children, className, ...remainingProps }) => (
  <p
    className={classNames('fr-card__detail', className)}
    {...dataAttributes(remainingProps)}
  >
    {children}
  </p>
);
CardDetail.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
CardDetail.defaultProps = {
  className: '',
};

export default CardDetail;
