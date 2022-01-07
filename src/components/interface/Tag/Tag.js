import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import Icon from '../../foundation/icon/index';

/*
* DSFR v1.2
*/
import '@gouvfr/dsfr/dist/component/tag/tag.css';
import colorFamilies from '../../../utils/variables';

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
  colorFamily,
  className,
  ...remainingProps
}) => {
  const HtmlTag = `${as}`;
  const _className = classNames('fr-tag', {
    [`fr-tag--${size}`]: size,
    [`fr-tag--${colorFamily}`]: colorFamily,
    'fr-fi-icon': (icon && iconPosition),
  }, className);

  const _tag = (
    <HtmlTag
      className={_className}
      title={title || undefined}
      href={href || undefined}
      target={target || undefined}
      rel={target === '_blank' ? 'noopener noreferer' : undefined}
      {...dataAttributes.getAll(remainingProps)}
    >
      {children}
    </HtmlTag>
  );
  return (
    icon ? (
      <Icon
        name={icon}
        size={iconSize[size]}
        iconPosition={children ? iconPosition : 'center'}
      >
        {_tag}
      </Icon>
    ) : _tag
  );
};

Tag.defaultProps = {
  className: '',
  as: 'a',
  size: 'md',
  href: '',
  title: '',
  target: '',
  icon: '',
  iconPosition: 'right',
  colorFamily: '',
  children: undefined,
};

Tag.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  colorFamily: PropTypes.oneOf([...colorFamilies, '']),
  as: PropTypes.oneOf(['a', 'span', 'p']),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  size: PropTypes.oneOf(['sm', 'md']),
  href: PropTypes.string,
  title: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
};

export default Tag;
