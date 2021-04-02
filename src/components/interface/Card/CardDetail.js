import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CardDetail = ({ children, className }) => (
  <p className={classNames('rf-card__detail', className)}>{children}</p>
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
