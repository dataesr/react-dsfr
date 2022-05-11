import React, { Children, cloneElement, useEffect } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import Icon from '../../foundation/icon/index';

/*
* DSFR v1.5.0
*/
import '@gouvfr/dsfr/dist/component/card/card.css';

/**
 *
 * @visibleName Card
 */
const Card = ({
  children,
  anchorAs,
  href,
  isHorizontal,
  icon,
  className,
  hasArrow,
  bodyClassName,
  ariaLabel,
  asLink,
  onClick,
  ...remainingProps
}) => {
  const img = Children.toArray(children).find((child) => child.props.__TYPE === 'CardImage');
  const detail = Children.toArray(children).find((child) => child.props.__TYPE === 'CardDetail');
  const description = Children.toArray(children).find(
    (child) => child.props.__TYPE === 'CardDescription',
  );
  const title = Children.toArray(children).find((child) => child.props.__TYPE === 'CardTitle');
  const displayTitle = title && cloneElement(title, {
    href, anchorAs, asLink, ariaLabel,
  });
  const _className = classNames('fr-card fr-card--grey', {
    'fr-card--horizontal': isHorizontal,
    'fr-enlarge-link': href || asLink || onClick,
  }, className);

  const onCardClick = (e) => {
    e.preventDefault();
    onClick(e);
  };

  const divButton = {
    true: {
      tabIndex: '0',
      role: 'button',
      click: (e) => onCardClick(e),
    },
    false: {
      tabIndex: undefined,
      role: undefined,
      click: undefined,
    },
  };
  const { role, tabIndex, click } = divButton[!!onClick];

  return (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      role={role}
      tabIndex={tabIndex}
      aria-label={ariaLabel || undefined}
      onClick={click}
      onKeyDown={click}
      className={_className}
      {...dataAttributes.getAll(remainingProps)}
    >
      <div className={classNames('fr-card__body', bodyClassName)}>
        <div className="fr-card__content">
          {displayTitle}
          {description}
          {detail}
        </div>
      </div>
      {img}
      {hasArrow && !icon && <Icon name="ri-arrow-right-line" size="xl" className="ds-fr-card-icon" />}
      {icon && <Icon name={icon} size="xl" className="ds-fr-card-icon" />}
    </div>
  );
};

Card.defaultProps = {
  anchorAs: 'a',
  href: '',
  ariaLabel: '',
  isHorizontal: false,
  className: '',
  bodyClassName: '',
  icon: '',
  hasArrow: true,
  asLink: null,
  onClick: undefined,
};
Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  anchorAs: PropTypes.oneOf(['a', PropTypes.elementType]),
  href: PropTypes.string,
  icon: PropTypes.string,
  ariaLabel: PropTypes.string,
  isHorizontal: PropTypes.bool,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  bodyClassName: PropTypes.string,
  hasArrow: PropTypes.bool,
  asLink: PropTypes.element,
  onClick: PropTypes.func,
};

export default Card;
