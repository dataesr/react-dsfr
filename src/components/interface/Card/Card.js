import React, { Children, cloneElement } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import Icon from '../../foundation/icon/index';

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
  isGrey,
  bodyClassName,
  ariaLabel,
  asLink,
  size,
  hasShadow,
  onClick,
  hasBorder,
  hasBackground,
  ...remainingProps
}) => {
  const header = Children.toArray(children).find((child) => child.props.__TYPE === 'CardHeader');
  const footer = Children.toArray(children).find((child) => child.props.__TYPE === 'CardFooter');
  const detailTop = Children.toArray(children).find((child) => child.props.__TYPE === 'CardDetail' && child.props.position === 'top');
  const detailBottom = Children.toArray(children).find((child) => child.props.__TYPE === 'CardDetail' && child.props.position === 'bottom');
  const description = Children.toArray(children).find(
    (child) => child.props.__TYPE === 'CardDescription',
  );
  const title = Children.toArray(children).find((child) => child.props.__TYPE === 'CardTitle');
  const displayTitle = title && cloneElement(title, {
    href, anchorAs, asLink, ariaLabel,
  });

  const _className = classNames('fr-card', {
    'fr-card--horizontal': isHorizontal,
    'fr-card--grey': isGrey,
    'fr-card--shadow': hasShadow,
    'fr-card--no-border': !hasBorder,
    'fr-card--no-background': !hasBackground,
    'fr-enlarge-link': (href || asLink || onClick) && !footer,
  }, className, `fr-card--${size}`);

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
      {header}
      <div className={classNames('fr-card__body', bodyClassName)}>
        <div className="fr-card__content">
          {detailTop}
          {displayTitle}
          {description}
          {detailBottom}
        </div>
        {footer}
      </div>
      {hasArrow && !icon && <Icon name="ri-arrow-right-line" size="xl" className="ds-fr-card-icon" />}
      {icon && <Icon name={icon} size="xl" className="ds-fr-card-icon" />}
    </div>
  );
};

Card.defaultProps = {
  anchorAs: 'a',
  href: '',
  ariaLabel: '',
  isGrey: false,
  hasShadow: false,
  hasBorder: true,
  isHorizontal: false,
  className: '',
  size: 'sm',
  bodyClassName: '',
  icon: '',
  hasArrow: true,
  hasBackground: true,
  asLink: null,
  onClick: undefined,
};
Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  anchorAs: PropTypes.oneOf(['a', PropTypes.elementType]),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  href: PropTypes.string,
  icon: PropTypes.string,
  ariaLabel: PropTypes.string,
  isHorizontal: PropTypes.bool,
  hasBorder: PropTypes.bool,
  hasBackground: PropTypes.bool,
  isGrey: PropTypes.bool,
  hasShadow: PropTypes.bool,
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
