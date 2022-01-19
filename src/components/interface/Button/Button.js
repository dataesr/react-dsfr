import React, {
  forwardRef, useCallback, useEffect, useRef,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import Icon from '../../foundation/icon/index';

/*
* DSFR v1.2
*/
import '@gouvfr/dsfr/dist/component/form/form.css';
import '@gouvfr/dsfr/dist/component/input/input.css';
import '@gouvfr/dsfr/dist/component/button/button.css';
import useTheme from '../SwitchTheme/useTheme';

const iconSize = {
  sm: 'sm',
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
    submit,
    colors,
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
  const oRef = useRef();
  const buttonRef = ref || oRef;
  const theme = useTheme();

  const colorButton = useCallback(() => {
    const { current } = buttonRef;
    const bgColor = colors[0];
    const color = colors[1];
    if (bgColor) {
      current.style.backgroundColor = secondary ? color : bgColor;

      if (secondary) {
        current.style.backgroundColor = color;
        current.style.boxShadow = `inset 0 0 0 1px ${bgColor}`;
      }
    }
    if (color) {
      current.style.color = secondary ? bgColor : color;
    }
  }, [colors, buttonRef, secondary]);

  useEffect(() => {
    const { current } = buttonRef;
    if (current.style.backgroundColor || current.style.color) {
      current.removeAttribute('style');
    }
  }, [buttonRef, disabled]);

  useEffect(() => {
    const { current } = buttonRef;
    if (current && theme === 'light') {
      colorButton();
    }
  }, [buttonRef, colorButton, theme, colors]);

  const _button = (
    <button
      ref={buttonRef}
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
      className={_className}
      title={title || undefined}
      disabled={disabled}
      {...dataAttributes.getAll(remainingProps)}
    >
      {children}
    </button>
  );
  return icon ? (
    <Icon
      verticalAlign="sub"
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
  submit: false,
  colors: [],
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
  submit: PropTypes.bool,
  /**
   * color[0] is background, color[1] is color
   */
  colors: PropTypes.arrayOf(PropTypes.string),
};

export default Button;
