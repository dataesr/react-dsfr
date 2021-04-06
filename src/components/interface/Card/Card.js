import React, { Children, cloneElement } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SCHEMES } from '../../../utils/constants';

import '@gouvfr/dsfr/dist/css/cards.min.css';

/**
 * Carte
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
}) => {
  const img = Children.toArray(children).find((child) => child.type.name === 'CardImage');
  const detail = Children.toArray(children).find((child) => child.type.name === 'CardDetail');
  const description = Children.toArray(children).find(
    (child) => child.type.name === 'CardDescription',
  );
  const title = Children.toArray(children).find((child) => child.type.name === 'CardTitle');
  const displayTitle = title && cloneElement(title, { href, anchorAs });
  const _className = classNames('rf-card', {
    'rf-card--horizontal': isHorizontal,
    'rf-card--no-arrow': !hasArrow,
    [`rf-scheme-${scheme}`]: scheme,
  }, className);
  return (
    <div className={_className} data-testid="card">
      {img}
      <div className="rf-card__body">
        {detail}
        {displayTitle}
        {description}
      </div>
    </div>
  );
};

Card.defaultProps = {
  anchorAs: 'a',
  isHorizontal: false,
  className: '',
  hasArrow: true,
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
  hasArrow: PropTypes.bool,
  scheme: PropTypes.oneOf(SCHEMES),
};

export default Card;
