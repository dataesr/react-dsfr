import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CLASS_NAME_TYPE } from '../../../utils/variables';

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
  brandLinkTitle,
  linkTarget,
}) => {
  const HtmlTag = `${titleAs}`;
  return (
    <div className={classnames('rf-tile__body', className)}>
      <HtmlTag className="rf-tile__title">
        <a
          className="rf-tile__link"
          href={linkHref}
          title={brandLinkTitle}
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
  brandLinkTitle: '',
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
  brandLinkTitle: PropTypes.string,
  linkHref: PropTypes.string.isRequired,
  /**
   * One of: string, object
   */
  className: CLASS_NAME_TYPE,
};

export default TileBody;
