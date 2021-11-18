import React, { cloneElement, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './icons.css';
import dataAttributes from '../../../utils/data-attributes';

/**
 *
 * @visibleName Icon
 */
const Icon = ({
  size, name, as, children, className, iconPosition, title, verticalAlign, color, ...remainingProps

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
  const icon = title ? (
    <HTMLTag
      ref={iconRef}
      className={_className}
      title={title}
      {...dataAttributes.getAll(remainingProps)}
    />
  ) : (
    <HTMLTag
      ref={iconRef}
      className={_className}
      {...dataAttributes.getAll(remainingProps)}
    />
  );

  const isChildrenElement = children && children.props;
  const newChildren = isChildrenElement ? children.props.children : children;

  const childrenWithIcon = (
    <span>
      {iconPosition === 'right' ? newChildren : icon}
      {iconPosition === 'right' ? icon : newChildren}
    </span>
  );

  useEffect(() => {
    if (color && iconRef.current) {
      iconRef.current.style.color = `${color}`;
    }
  }, [color]);

  return (
    <>
      {isChildrenElement ? cloneElement(children, {
        ...children.props,
        className: children.props ? classNames({
          [`${children.props.className}`]: children.props.className,
        }) : '',
        children: childrenWithIcon,
      }) : childrenWithIcon}
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
  size: PropTypes.oneOf(['fw', 'xxs', 'xs', 'sm', '1x', 'lg', 'xl', '2x', '3x', '10x']),
  name: PropTypes.string.isRequired,
  verticalAlign: PropTypes.bool,
  className: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right', 'center']),
  as: PropTypes.oneOf(['span', 'i', 'div', 'p']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string,
  ]),
  title: PropTypes.string,
  color: PropTypes.string,
};

export default Icon;
