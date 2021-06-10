import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../../foundation/icon/index';
import dataAttributes from '../../../utils/data-attributes';
import useRouterContext from '../../../hooks/useRouterContext';
import './links.css';

/**
 *
 * @visibleName Link
 */
const Link = ({
  children,
  href,
  to,
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
  const Router = useRouterContext();
  const _className = classNames(
    className, {
      [`ds-fr--${display}`]: display && icon,
      'fr-link': isSimple,
    },
  );
  const Component = (Router && to) ? Router : 'a';
  const _link = (
    <Component
      aria-current={current ? 'page' : undefined}
      href={href || undefined}
      to={to || undefined}
      title={title || undefined}
      target={target}
      rel={(target === '_blank') ? 'noopener noreferrer' : undefined}
      className={_className}
      {...dataAttributes(remainingProps)}
    >
      {children}
    </Component>
  );
  return icon ? (
    <Icon
      className={classNames({ 'ds-fr--v-top': display && icon })}
      name={icon}
      size={iconSize}
      iconPosition={_link.props?.children ? iconPosition : 'center'}
    >
      {_link}
    </Icon>
  ) : _link;
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
  to: '',
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
  to: PropTypes.string,
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
