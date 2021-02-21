import PropTypes from 'prop-types';

/**
 * Design system Icon
 *
 * @visibleName Icon
 */
const Icon = ({ icon, size }) => {
  const iconSize = (size !== 'md') ? ` rf-fi--${size}` : '';
  return <span className={`rf-fi-${icon}${iconSize}`} />;
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
};
Icon.defaultProps = {
  size: 'md',
};

export default Icon;
