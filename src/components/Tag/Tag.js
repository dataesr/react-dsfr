import React from 'react';
import PropTypes from 'prop-types';
import '@gouvfr/tags/dist/css/tags.min.css';


/**
 * Le tag catégorise/classe/organise les contenus à l'aide de mots-clés. Il aide les utilisateurs à rechercher et à trouver facilement une information.
 *
 * @visibleName Tag
 */
const Tag = ({
  as, children, size, href, title, target, icon, iconPlace, 
}) => {
  const HtmlTag = `${as}`;
  let attribute = { className: `rf-tag rf-tag--${size} ${(icon) ? icon : ''} ${(icon) ? 'rf-tag--icon-'+iconPlace : '' }` };

  if (as === 'a') {
    attribute = { ...attribute, href, target };

    if (target === '_blank') {
      attribute = { ...attribute, rel: 'noopener noreferer' };
    }
  }

  if (title) {
    attribute = { ...attribute, title };
  }

  return (
    <HtmlTag {...attribute}>
      {children}
    </HtmlTag>
  );
};

export default Tag;

Tag.defaultProps = {
  as: 'p',
  size: 'md',
  href: '#',
  title: '',
  target: '_self',
  icon: '',
  iconPlace: 'right'
};

Tag.propTypes = {
  as: PropTypes.oneOf(['a', 'li', 'p']),
  children: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md']),
  href: PropTypes.string,
  title: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  iconPlace: PropTypes.oneOf(['left', 'right']),
};