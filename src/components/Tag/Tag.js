import React from 'react';
import PropTypes from 'prop-types';
import '@gouvfr/tags/dist/css/tags.min.css';


/**
 * Le tag catégorise/classe/organise les contenus à l'aide de mots-clés. Il aide les utilisateurs à rechercher et à trouver facilement une information.
 *
 * @visibleName Tag
 */
const Tag = ({
  as, children, size, href, title, isBlank, icon, iconPlace, 
}) => {
  let tag = '';
  let attribute = { className: `rf-tag rf-tag--${size} ${(icon) ? icon : ''} ${(icon) ? 'rf-tag--icon-'+iconPlace : '' }` };
  switch (as) {
    case 'p':
      tag = 'p';
      break;

      case 'li':
      tag = 'li';
      break;

      case 'a':
      tag = 'a';
      if (isBlank) {
        attribute = { ...attribute, href, target: '_blank', rel: 'noopener noreferer' };
      } else {
        attribute = { ...attribute, href };
      }
      break;

    default:
      tag = 'p';

  }

  if (title) {
    attribute = { ...attribute, title };
  }

  return (React.createElement(tag, attribute, children));
};

export default Tag;

Tag.defaultProps = {
  as: 'p',
  size: 'md',
  href: '',
  title: '',
  isBlank: false,
  icon: '',
  iconPlace: 'right'
};

Tag.propTypes = {
  as: PropTypes.string,
  children: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md']),
  href: PropTypes.string,
  title: PropTypes.string,
  isBlank: PropTypes.bool,
  icon: PropTypes.string,
  iconPlace: PropTypes.string,
};