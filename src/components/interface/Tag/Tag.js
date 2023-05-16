import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import Icon from '../../foundation/icon/index';

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
  className,
  closable,
  colorFamily,
  href,
  icon,
  iconPosition,
  onClick,
  small,
  target,
  title,
  selected,
  ...remainingProps
}) => {
  const ref = useRef();
  const _className = classNames('fr-tag', {
    'fr-tag--sm': small,
    'fr-tag--dismiss': closable && onClick,
    'fr-fi-icon': icon && iconPosition,
    [`fr-tag--${colorFamily}`]: colorFamily,
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
      aria-pressed={selected || undefined}
      title={title || undefined}
      href={href || undefined}
      target={target || undefined}
      rel={target === '_blank' ? 'noopener noreferer' : undefined}
      {...dataAttributes.getAll(remainingProps)}
    >
      {children}
      {(selected && closable) && (
        <Icon
          className="ds-fr-tag-icon"
          name="ri-checkbox-circle-line"
          size="lg"
          verticalAlign="sub"
        />
      )}
    </HtmlTag>
  );

  const renderTag = () => {
    let tag = _tag;

    if (closable) {
      tag = (
        <Icon
          iconPosition="right"
          name="ri-close-line"
          size="lg"
          verticalAlign="sub"
        >
          {_tag}
        </Icon>
      );
    }

    return tag;
  };

  return (
    icon ? (
      <Icon
        iconPosition={children ? iconPosition : 'center'}
        name={icon}
        size={iconSize[small ? 'sm' : 'md']}
      >
        {_tag}
      </Icon>
    ) : renderTag()
  );
};

Tag.defaultProps = {
  as: 'p',
  children: undefined,
  className: '',
  closable: false,
  colorFamily: '',
  href: '',
  icon: '',
  iconPosition: 'right',
  onClick: undefined,
  selected: undefined,
  small: false,
  target: '',
  title: '',
};

Tag.propTypes = {
  as: PropTypes.oneOf(['a', 'span', 'p']),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
  closable: PropTypes.bool,
  colorFamily: PropTypes.oneOf([...colorFamilies, '']),
  href: PropTypes.string,
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  onClick: PropTypes.oneOfType([PropTypes.func, undefined]),
  selected: PropTypes.bool,
  small: PropTypes.bool,
  target: PropTypes.string,
  title: PropTypes.string,
};

export default Tag;
