import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import Icon from '../../foundation/icon/index';

/*
* DSFR v1.3.1
*/
import '@gouvfr/dsfr/dist/component/tag/tag.css';

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
  closable,
  children,
  small,
  href,
  title,
  target,
  icon,
  iconPosition,
  className,
  selected,
  onClick,
  ...remainingProps
}) => {
  const ref = useRef();
  const _className = classNames('fr-tag', {
    'fr-tag--sm': small,
    'fr-tag--dismiss': closable && onClick,
    'fr-fi-icon': (icon && iconPosition),
  }, className);

  let HtmlTag = `${as}`;

  if (selected !== undefined || onClick) {
    HtmlTag = 'button';
  }

  if (href) {
    HtmlTag = 'a';
  }
  const handleClick = (e) => {
    e.preventDefault();

    if (closable) {
      ref.current.remove();
    }
    onClick(e);
  };

  const _tag = (

    <HtmlTag
      ref={ref}
      aria-label={closable ? `Retirer ${title}` : undefined}
      onClick={(!href && onClick) || closable ? handleClick : undefined}
      className={_className}
      aria-pressed={selected || 'false'}
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
        size={iconSize[small ? 'sm' : 'md']}
        iconPosition={children ? iconPosition : 'center'}
      >
        {_tag}
      </Icon>
    ) : _tag
  );
};

Tag.defaultProps = {
  className: '',
  as: 'p',
  small: false,
  closable: false,
  selected: undefined,
  href: '',
  title: '',
  target: '',
  icon: '',
  iconPosition: 'right',
  children: undefined,
  onClick: null,
};

Tag.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  as: PropTypes.oneOf(['a', 'span', 'p']),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  small: PropTypes.bool,
  selected: PropTypes.bool,
  closable: PropTypes.bool,
  href: PropTypes.string,
  title: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  iconPosition: PropTypes.oneOf(['left', 'right']),
};

export default Tag;
