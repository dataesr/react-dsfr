import React, { Children, cloneElement } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

import '@gouvfr/dsfr/dist/css/cards.min.css';

/**
 *
 * @visibleName Card
 */
const Card = ({
  children,
  anchorAs,
  href,
  isHorizontal,
  className,
  hasArrow,
  bodyClassName,
  enlargeLink,
  ...remainingProps
}) => {
  const img = Children.toArray(children).find((child) => child.props.__TYPE === 'CardImage');
  const detail = Children.toArray(children).find((child) => child.props.__TYPE === 'CardDetail');
  const description = Children.toArray(children).find(
    (child) => child.props.__TYPE === 'CardDescription',
  );
  const title = Children.toArray(children).find((child) => child.props.__TYPE === 'CardTitle');
  const displayTitle = title && cloneElement(title, { href, anchorAs });
  const _className = classNames('fr-card', {
    'fr-card--horizontal': isHorizontal,
    'fr-card--no-arrow': !hasArrow,
    'fr-enlarge-link': enlargeLink,
  }, className);
  return (
    <div
      className={_className}
      {...dataAttributes.getAll(remainingProps)}
    >
      <div className={classNames('fr-card__body', bodyClassName)}>
        {displayTitle}
        {description}
        {detail}
      </div>
      {img}
    </div>
  );
};

Card.defaultProps = {
  anchorAs: 'a',
  isHorizontal: false,
  className: '',
  bodyClassName: '',
  hasArrow: true,
  enlargeLink: true,
};
Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  anchorAs: PropTypes.string,
  href: PropTypes.string.isRequired,
  isHorizontal: PropTypes.bool,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  bodyClassName: PropTypes.string,
  hasArrow: PropTypes.bool,
  enlargeLink: PropTypes.bool,
};

export default Card;
