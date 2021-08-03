import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './icons.css';

// TODO add tests
// TODO vertical-align props

/**
 *
 * @visibleName Icon
 */
const Icon = ({
  size, name, as, children, className, iconPosition, title,
}) => {
  const Tag = `${as}`;
  const _className = classNames(
    `ri-${size}`,
    { [`icon-${iconPosition}`]: iconPosition !== 'center' },
    name,
    className,
  );
  const i = <Tag className={_className} title={title} />;
  const newChildren = (
    <>
      {iconPosition === 'right' ? children?.props?.children : i}
      {iconPosition === 'right' ? i : children?.props?.children}
    </>
  );
  return (
    <>
      {children ? cloneElement(children, {
        ...children.props,
        className: classNames({
          [`${children.props.className}`]: children.props.className,
        }),
        children: newChildren,
      }) : i}
    </>
  );
};

Icon.defaultProps = {
  size: 'sm',
  as: 'span',
  className: '',
  iconPosition: 'left',
  children: null,
  title: '',
};

Icon.propTypes = {
  size: PropTypes.oneOf(['fw', 'xxs', 'xs', 'sm', '1x', 'lg', 'lg', 'xl', '2x', '3x', '10x']),
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right', 'center']),
  as: PropTypes.oneOf(['span', 'i', 'div', 'p']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
  title: PropTypes.string,
};

export default Icon;
