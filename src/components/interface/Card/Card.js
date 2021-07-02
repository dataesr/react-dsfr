import React, { Children, cloneElement } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SCHEMES } from '../../../utils/constants';
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
  scheme,
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
    [`fr-scheme-${scheme}`]: scheme,
  }, className);
  return (
    <div
      className={_className}
      {...dataAttributes(remainingProps)}
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
  scheme: '',
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
  scheme: PropTypes.oneOf(SCHEMES),
};

export default Card;
