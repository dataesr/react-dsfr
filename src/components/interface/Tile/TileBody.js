import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CLASS_NAME_TYPE } from '../../../utils/types';

/**
 *
 * @visibleName Corps de la tuile
 */
const TileBody = ({
  className,
  title,
  description,
  titleAs,
  linkHref,
  linkTitle,
  linkTarget,
}) => {
  const HtmlTag = `${titleAs}`;
  return (
    <div className={classNames('rf-tile__body', className)}>
      <HtmlTag className="rf-tile__title">
        <a
          className="rf-tile__link"
          href={linkHref}
          title={linkTitle}
          target={linkTarget}
        >
          {title}
        </a>
      </HtmlTag>
      {description && <p className="rf-tile__desc">{description}</p>}
    </div>
  );
};

TileBody.defaultProps = {
  description: '',
  titleAs: 'p',
  linkTitle: '',
  linkTarget: '',
  className: '',
};

TileBody.propTypes = {
  /**
   * Html tag to render in accordion title.
   */
  titleAs: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  linkTarget: PropTypes.string,
  linkTitle: PropTypes.string,
  linkHref: PropTypes.string.isRequired,
  /**
   * One of: string, object
   */
  className: CLASS_NAME_TYPE,
};

export default TileBody;
