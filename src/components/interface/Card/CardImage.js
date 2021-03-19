import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CLASS_NAME_TYPE } from '../../../utils/types';

const CardImage = ({ alt, src, className }) => (
  <div className={classNames('rf-card__img', className)}>
    <img src={src} alt={alt} />
  </div>
);

CardImage.propTypes = {
  alt: PropTypes.string,
  className: CLASS_NAME_TYPE,
  src: PropTypes.string.isRequired,
};
CardImage.defaultProps = {
  className: '',
  alt: null,
};

export default CardImage;
