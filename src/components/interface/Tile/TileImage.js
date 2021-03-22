import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * La tuile est un point d’entrée qui redirige les utilisateurs vers des pages de contenu.
 * Elle fait partie d'une collection et n’est jamais présentée de manière isolée.
 *
 * @visibleName Tuile horizontale ou verticale
 */
const TileImage = ({
  title,
  src,
  alt,
  className,
}) => (
  <div className={classNames('rf-tile__img-wrap', className)}>
    <img
      src={src}
      title={title}
      alt={alt}
    />
  </div>
);

TileImage.defaultProps = {
  className: '',
  title: '',
};

TileImage.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  title: PropTypes.string,
  alt: PropTypes.string.isRequired,
  /**
   * Source of the image — size is fixed 80x80
   */
  src: PropTypes.string.isRequired,
};

export default TileImage;
