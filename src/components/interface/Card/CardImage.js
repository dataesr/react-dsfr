import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import typeValidation from '../../../utils/type-validation';

const CardImage = ({
  alt, src, className, ...remainingProps
}) => (
  <div
    className={classNames('fr-card__img', className)}
    {...dataAttributes.getAll(remainingProps)}
  >
    <img src={src} alt={alt} className="fr-responsive-img" />
  </div>
);

CardImage.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('CardImage'),
  alt: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
};
CardImage.defaultProps = {
  __TYPE: 'CardImage',
  className: '',
  alt: null,
};

export default CardImage;
