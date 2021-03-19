import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CLASS_NAME_TYPE } from '../../../../utils/types';

/**
 * Design system Icon
 *
 * @visibleName Icon
 */
const Icon = ({ icon, size, className }) => {
  const _className = classNames(className, `rf-fi-${icon}`, {
    [`rf-fi--${size}`]: (size !== 'md'),
  });
  return <span className={_className} />;
};

Icon.propTypes = {
  /**
  * Icon to use
  */
  icon: PropTypes.string.isRequired,
  /**
  * Icon size
  */
  size: PropTypes.oneOf(['md', 'lg', 'xl']),
  className: CLASS_NAME_TYPE,
};
Icon.defaultProps = {
  size: 'md',
  className: '',
};

export default Icon;
