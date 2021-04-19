import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// import '../../../style.css';
import './schemes.css';
import './buttons.css';

/**
 * @visibleName Button
 */
const Button = ({
  size,
  secondary,
  disabled,
  title,
  icon,
  iconPosition,
  onClick,
  children,
  className,
}) => {
  const _className = classNames('fr-btn', `fr-btn--${size}`, className, {
    [`fr-btn--icon fr-fi-${icon}`]: icon,
    'fr-btn--secondary': secondary,
    [`fr-btn--icon-${iconPosition}`]: icon && children,
  });

  // TODO manage all icons from remix library
  return (
    <button
      type="button"
      onClick={onClick}
      className={_className}
      title={title}
      disabled={disabled}
    >
      {icon && children ? (<span className="sr-only">{children}</span>)
        : children}
    </button>
  );
};

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
  children: PropTypes.string,
};

export default Button;
