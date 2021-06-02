import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

const CardDescription = ({ children, className, ...remainingProps }) => (
  <p
    className={classNames('fr-card__desc', className)}
    {...dataAttributes(remainingProps)}
  >
    {children}

  </p>
);
CardDescription.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
CardDescription.defaultProps = {
  className: '',
};

export default CardDescription;
