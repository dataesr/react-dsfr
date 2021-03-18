import PropTypes from 'prop-types';
import classNames from 'classnames';

const CardImage = ({ alt, src, className }) => (
  <div className={classNames('rf-card__img', className)}>
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
