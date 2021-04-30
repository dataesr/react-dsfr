import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SCHEMES } from '../../../utils/constants';
import Icon from '../Icon';

import './tags.css';

const iconSize = {
  sm: 'lg',
  md: 'lg',
  lg: '2x',
};
/**
 *
 * @visibleName Tag
 */
const Tag = ({
  as,
  children,
  size,
  href,
  title,
  target,
  icon,
  iconPosition,
  className,
  scheme,
}) => {
  const HtmlTag = `${as}`;
  const _className = classNames('fr-tag', {
    [`fr-tag--${size}`]: size,
    'fr-fi-icon': (icon && iconPosition),
    [`fr-scheme-${scheme}`]: scheme,
  }, className);

  const _tag = (
    <HtmlTag
      className={_className}
      title={title || undefined}
      href={href || undefined}
      target={target || undefined}
      rel={target === '_blank' ? 'noopener noreferer' : undefined}
    >
      {children}
    </HtmlTag>
  );
  return (
    icon ? (
      <Icon
        name={icon}
        size={iconSize[size]}
        iconPosition={children && `${iconPosition}`}
      >
        {_tag}
      </Icon>
    ) : _tag
  );
};

Tag.defaultProps = {
  className: '',
  scheme: '',
  as: 'p',
  size: 'md',
  href: '',
  title: '',
  target: '',
  icon: '',
  iconPosition: 'right',
};

Tag.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  scheme: PropTypes.oneOf(SCHEMES),
  as: PropTypes.oneOf(['a', 'span', 'p']),
  children: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  href: PropTypes.string,
  title: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
};

export default Tag;
