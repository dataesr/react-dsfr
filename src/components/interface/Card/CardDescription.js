import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import typeValidation from '../../../utils/type-validation';

const CardDescription = ({
  children, className, as, ...remainingProps
}) => {
  const HTMLTag = `${as}`;
  return (
    <HTMLTag
      className={classNames('fr-card__desc', className)}
      {...dataAttributes.getAll(remainingProps)}
    >
      {children}

    </HTMLTag>
  );
};
CardDescription.defaultProps = {
  __TYPE: 'CardDescription',
  className: '',
  as: 'p',
};

CardDescription.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('CardDescription'),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  as: PropTypes.oneOf(['span', 'div', 'p']),
};

export default CardDescription;
