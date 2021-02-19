import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CLASS_NAME_TYPE } from '../../utils/variables';

/**
 *
 * @visibleName Button
 */
const Button = (props) => {
  const {
    size, secondary, disabled, title, icon, children, onClick, className,
  } = props;

  // TODO manage all icons from remix library
  // TODO manage icon position left/right
  return (
    <button
      type="button"
      onClick={onClick}
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
      {icon && children ? (<span className="sr-only">{children}</span>)
        : children}
    </button>
  );
};

Button.defaultProps = {
  size: 'md',
  secondary: false,
  disabled: false,
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
  title: PropTypes.string.isRequired,
  className: CLASS_NAME_TYPE,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
};

export default Button;
