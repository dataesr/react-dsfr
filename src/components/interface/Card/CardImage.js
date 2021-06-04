import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

const CardImage = ({
  alt, src, className, ...remainingProps
}) => (
  <div
    className={classNames('fr-card__img', className)}
    {...dataAttributes(remainingProps)}
  >
    <img src={src} alt={alt} />
  </div>
);

CardImage.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  src: PropTypes.string.isRequired,
};
CardImage.defaultProps = {
  className: '',
  alt: null,
};

export default CardImage;
