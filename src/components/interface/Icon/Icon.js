import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import 'remixicon/fonts/remixicon.css';
import './icon.css';

/**
 *
 * @visibleName Icon
 */
const Icon = ({
  size, name, as, children, className, iconPosition,
}) => {
  const Tag = `${as}`;
  const _className = classNames(
    `ri-${size}`,
    { [`icon-${iconPosition}`]: iconPosition },
    name,
    className,
  );
  const i = <Tag className={_className} />;
  const newChildren = (
    <>
      {iconPosition === 'right' ? children.props?.children : i}
      {iconPosition === 'right' ? i : children.props?.children}
    </>
  );

  return (
    <>
      {cloneElement(children, {
        ...children.props,
        className: classNames({
          [`${children.props.className}`]: children.props.className,
        }),
        children: newChildren,
      })}
    </>
  );
};

Icon.defaultProps = {
  size: 'sm',
  as: 'span',
  className: '',
  iconPosition: 'left',
};

Icon.propTypes = {
  size: PropTypes.oneOf(['fw', 'xxs', 'xs', 'sm', '1x', 'lg', 'lg', 'xl', '2x', '3x', '10x']),
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  as: PropTypes.oneOf(['span', 'i']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default Icon;
