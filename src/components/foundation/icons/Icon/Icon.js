import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
Icon.defaultProps = {
  size: 'md',
  className: '',
};

export default Icon;
