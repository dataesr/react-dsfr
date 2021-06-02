import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../../foundation/icon/index';
import dataAttributes from '../../../utils/data-attributes';

import './links.css';

/**
 *
 * @visibleName Link
 */
const Link = ({
  children,
  href,
  title,
  target,
  isSimple,
  className,
  as,
  current,
  display,
  iconSize,
  icon,
  iconPosition,
  ...remainingProps
}) => {
  const _className = classNames(
    className, {
      [`ds-fr--${display}`]: display && icon,
      'fr-link': isSimple,
    },
  );

  const asLink = as ? cloneElement(as, { className: _className, children, 'aria-current': (current && 'page') || undefined }) : null;
  const _link = (
    <a
      aria-current={current ? 'page' : undefined}
      href={href}
      title={title || undefined}
      target={target}
      rel={(target === '_blank') ? 'noopener noreferrer' : undefined}
      className={_className}
      {...dataAttributes(remainingProps)}
    >
      {children}
    </a>
  );
  const _element = as ? asLink : _link;
  return icon ? (
    <Icon
      className={classNames({ 'ds-fr--v-top': display && icon })}
      name={icon}
      size={iconSize}
      iconPosition={_element.props?.children ? iconPosition : 'center'}
    >
      {_element}
    </Icon>
  ) : _element;
};

Link.defaultProps = {
  className: '',
  title: '',
  target: '_self',
  isSimple: false,
  current: false,
  icon: '',
  as: null,
  iconPosition: 'right',
  href: '',
  children: '',
  display: 'inline',
  iconSize: '1x',
};

Link.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  href: PropTypes.string,
  as: PropTypes.element,
  title: PropTypes.string,
  target: PropTypes.string,
  isSimple: PropTypes.bool,
  current: PropTypes.bool,
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  iconSize: PropTypes.oneOf(['fw', 'xxs', 'xs', 'sm', '1x', 'lg', 'lg', 'xl', '2x', '3x', '10x']),
  /**
   * @ignore
   */
  display: PropTypes.oneOf(['inline', 'flex']),
};

export default Link;
