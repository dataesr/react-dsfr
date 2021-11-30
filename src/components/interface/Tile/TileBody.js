import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from '../Link/index';
import dataAttributes from '../../../utils/data-attributes';

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
  asLink,
  children,
  ...remainingProps
}) => {
  const TitleTag = `${titleAs}`;
  return (
    <div
      className={classNames('fr-tile__body', className)}
      {...dataAttributes.getAll(remainingProps)}
    >
      <TitleTag className="fr-tile__title">
        <Link
          as={asLink || undefined}
          className="fr-tile__link"
          title={linkTitle}
          target={linkTarget || undefined}
          href={linkHref || undefined}
        >
          {title}
        </Link>
      </TitleTag>
      {description && <p className="fr-tile__desc">{description}</p>}
      {children}
    </div>
  );
};

TileBody.defaultProps = {
  description: '',
  titleAs: 'h3',
  linkTitle: '',
  linkTarget: '',
  className: '',
  linkHref: '',
  children: null,
  asLink: null,
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
  linkHref: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  asLink: PropTypes.element,
};

export default TileBody;
