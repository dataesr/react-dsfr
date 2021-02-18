import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 *
 * @visibleName Button
 */
const Button = (props) => {
  const {
    size, secondary, disabled, title, icon, children, className,
  } = props;

  // TODO manage all icons from remix library
  // TODO manage icon position left/right
  return (
    <button
      type="button"
      className={classnames('rf-btn',
        {
          [`rf-btn--icon rf-fi-${icon}`]: icon,
          'rf-btn--secondary': secondary,
          'rf-btn--icon-left': children,
        },
        `rf-btn--${size}`,
        className)}
      title={title}
      disabled={disabled}
    >
      {
        icon && children ? (<span className="sr-only">{children}</span>)
          : children
      }
    </button>
  );
};

Button.defaultProps = {
  size: 'md',
  secondary: false,
  disabled: false,
  icon: '',
  children: '',

  className: '',
};

Button.propTypes = {
  secondary: PropTypes.bool,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  title: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
};

export default Button;
