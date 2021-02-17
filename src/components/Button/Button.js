import PropTypes from 'prop-types';

/**
 *
 * @visibleName Button
 */
const Button = (props) => {
  const {
    size, secondary, disabled, title, icon, children,
  } = props;
  const classSize = `rf-btn--${size}`;
  const classIcon = icon ? `rf-btn--icon rf-fi-${icon}` : '';
  const classChildren = children ? 'rf-btn--icon-left' : '';

  // TODO manage all icons from remix library
  // TODO manage icon position left/right
  return (
    <button
      type="button"
      className={`rf-btn ${secondary ? 'rf-btn--secondary' : ''} ${classSize} ${classIcon} ${classChildren}`}
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
};

Button.propTypes = {
  secondary: PropTypes.bool,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
};

export default Button;
