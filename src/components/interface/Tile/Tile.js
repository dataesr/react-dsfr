import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CLASS_NAME_TYPE } from '../../../utils/variables';

/**
 * La tuile est un point d’entrée qui redirige les utilisateurs vers des pages de contenu.
 * Elle fait partie d'une collection et n’est jamais présentée de manière isolée.
 *
 * @visibleName Tuile horizontale ou verticale
 */
const Tile = (props) => {
  const {
    horizontal,
    imageTitle,
    imageSrc,
    imageAlt,
    className,
    title,
    description,
    titleAs,
    horizontalMedium,
    verticalMedium,
    linkHref,
    linkTitle,
    linkTarget,
  } = props;
  const TitleTile = `${titleAs}`;
  return (
    <div className={classnames(className, 'rf-tile', {
      'rf-tile-horizontal': horizontal,
      'rf-tile--horizontal-md': !horizontal && horizontalMedium,
      'rf-tile--vertical-md': verticalMedium && horizontal,
    })}
    >
      {imageSrc
            && (
            <div className="rf-tile__img-wrap">
              <img src={imageSrc} title={imageTitle} alt={imageAlt} />
            </div>
            )}
      <div className="rf-tile__body">
        <TitleTile className="rf-tile__title">
          <a
            className="rf-tile__link"
            href={linkHref}
            title={linkTitle}
            target={linkTarget}
          >
            {title}
          </a>
        </TitleTile>
        {description && <p className="rf-tile__desc">{description}</p>}
      </div>
    </div>
  );
};

Tile.defaultProps = {
  className: '',
  description: '',
  imageTitle: '',
  imageAlt: '',
  imageSrc: '',
  titleAs: 'p',
  horizontal: false,
  verticalMedium: false,
  horizontalMedium: false,
  linkTitle: '',
  linkTarget: '',
};

Tile.propTypes = {
  /**
   * Html tag to render in accordion title.
   */
  titleAs: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  className: CLASS_NAME_TYPE,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imageTitle: PropTypes.string,
  imageAlt: PropTypes.string,
  /**
   * Source of the image — size is fixed 80x80
   */
  imageSrc: PropTypes.string,
  linkTarget: PropTypes.string,
  linkTitle: PropTypes.string,
  linkHref: PropTypes.string.isRequired,
  horizontal: PropTypes.bool,
  verticalMedium: PropTypes.bool,
  horizontalMedium: PropTypes.bool,
};

export default Tile;
