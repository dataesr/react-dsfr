import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 *
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
  const _className = classNames('rf-btn', `rf-btn--${size}`, className, {
    [`rf-btn--icon rf-fi-${icon}`]: icon,
    'rf-btn--secondary': secondary,
    [`rf-btn--icon-${iconPosition}`]: icon && children,
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
