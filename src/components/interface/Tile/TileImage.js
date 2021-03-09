import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CLASS_NAME_TYPE } from '../../../utils/variables';

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
  <div className={classnames('rf-tile__img-wrap', className)}>
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
  /**
   * One of: string, object
   */
  className: CLASS_NAME_TYPE,
  title: PropTypes.string,
  alt: PropTypes.string.isRequired,
  /**
   * Source of the image — size is fixed 80x80
   */
  src: PropTypes.string.isRequired,
};

export default TileImage;
