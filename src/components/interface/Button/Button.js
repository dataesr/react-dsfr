import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import Icon from '../../foundation/icon/index';

/*
* DSFR v1.0.0-rc1.0
*/
import '../../../style/core.css';
import '../../../style/content.css';
import '../../../style/forms.css';
import '../../../style/inputs.css';

/*
* react-ds-fr
*/
import '../../../style/colors.css';
import '../../../style/custom.css';

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
    styleAsLink,
    children,
    className,
    ...remainingProps
  } = props;
  const _className = classNames(
    `fr-btn--${size}`,
    className,
    {
      'fr-btn': !styleAsLink,
      'fr-link': styleAsLink,
      'fr-fi-icon': !children && icon,
      'fr-btn--secondary': secondary,
    },
  );
  const _button = (
    <button
      ref={ref}
      type="button"
      onClick={onClick}
      className={_className}
      title={title || undefined}
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
  onClick: () => { },
  children: '',
  className: '',
  styleAsLink: false,
  title: null,
};

Button.propTypes = {
  secondary: PropTypes.bool,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  title: PropTypes.string,
  styleAsLink: PropTypes.bool,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default Button;
