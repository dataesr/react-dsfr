import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import Icon from '../../foundation/icon/index';

import '../../../style.css';
import './schemes.css';
import './buttons.css';

const iconSize = {
  sm: 'lg',
  md: 'lg',
  lg: '2x',
};

/**
 * @visibleName Button
 */
const Button = forwardRef((props, ref) => {
  const {
    size,
    secondary,
    disabled,
    title,
    icon,
    iconPosition,
    onClick,
    children,
    className,
    ...remainingProps
  } = props;
  const _className = classNames('fr-btn',
    `fr-btn--${size}`,
    className,
    {
      'fr-fi-icon': !children && icon,
      'fr-btn--secondary': secondary,
    });
  const _button = (
    <button
      ref={ref}
      type="button"
      onClick={onClick}
      className={_className}
      title={title}
      disabled={disabled}
      {...dataAttributes(remainingProps)}
    >
      {children}
    </button>
  );
  return icon ? (
    <Icon
      name={icon}
      size={iconSize[size]}
      iconPosition={(children && `${iconPosition}`) || 'center'}
    >
      {_button}
    </Icon>
  ) : _button;
});

Button.defaultProps = {
  size: 'md',
  secondary: false,
  disabled: false,
  iconPosition: 'left',
  icon: '',
  onClick: () => {},
  children: '',
  className: '',
};

Button.propTypes = {
  secondary: PropTypes.bool,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  title: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default Button;
