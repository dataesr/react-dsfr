import React, { cloneElement, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './icons.css';

/**
 *
 * @visibleName Icon
 */
const Icon = ({
  size, name, as, children, className, iconPosition, title, verticalAlign, color,
}) => {
  const iconRef = useRef();
  const HTMLTag = `${as}`;
  const _className = classNames(
    `ri-${size}`,
    {
      [`icon-${iconPosition}`]: iconPosition !== 'center',
      'ds-fr--v-middle': verticalAlign,
    },
    name,
    className,
  );
  const i = title ? (
    <HTMLTag
      ref={iconRef}
      className={_className}
      title={title}
    />
  ) : (
    <HTMLTag
      ref={iconRef}
      className={_className}
    />
  );
  const newChildren = (
    <>
      {iconPosition === 'right' ? children?.props?.children : i}
      {iconPosition === 'right' ? i : children?.props?.children}
    </>
  );

  useEffect(() => {
    if (color && iconRef.current) {
      iconRef.current.style.color = `${color}`;
    }
  }, [color]);

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
  color: '',
  as: 'span',
  className: '',
  verticalAlign: false,
  iconPosition: 'left',
  children: null,
  title: '',
};

Icon.propTypes = {
  size: PropTypes.oneOf(['fw', 'xxs', 'xs', 'sm', '1x', 'lg', 'lg', 'xl', '2x', '3x', '10x']),
  name: PropTypes.string.isRequired,
  verticalAlign: PropTypes.bool,
  className: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right', 'center']),
  as: PropTypes.oneOf(['span', 'i', 'div', 'p']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
  title: PropTypes.string,
  color: PropTypes.string,
};

export default Icon;
