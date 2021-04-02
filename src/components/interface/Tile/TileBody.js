import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from '../Links';

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
        <Link
          className="rf-tile__link"
          title={linkTitle}
          target={linkTarget || undefined}
          href={linkHref}
        >
          {title}
        </Link>
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
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default TileBody;
