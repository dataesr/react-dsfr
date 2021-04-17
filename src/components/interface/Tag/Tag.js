import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SCHEMES } from '../../../utils/constants';

import '@gouvfr/dsfr/dist/css/tags.min.css';

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
    [`fr-fi-${icon}`]: icon,
    [`fr-tag--icon-${iconPosition}`]: (icon && iconPosition),
    [`fr-scheme-${scheme}`]: scheme,
  }, className);

  return (
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
  size: PropTypes.oneOf(['sm', 'md']),
  href: PropTypes.string,
  title: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
};

export default Tag;
