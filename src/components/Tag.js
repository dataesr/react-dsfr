import React from 'react';
import PropTypes from 'prop-types';
import '@gouvfr/tags/dist/css/tags.min.css';

const Tag = ({
  as, children, sm, href, title, isBlank,
}) => {
  let tag = '';
  let attribute = { className: `rf-tag${sm ? '--sm' : ''}` };
console.log('as', as);
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
      tag = 'span';

  }

  if (title) {
    attribute = { ...attribute, title };
  }

  return (React.createElement(tag, attribute, children));
};

export default Tag;

Tag.defaultProps = {
  as: 'span',
  sm: false,
  href: '',
  title: '',
  isBlank: false,
  theme: 'default',
  icon: '',
  iconPlace: 'right'
};

Tag.propTypes = {
  as: PropTypes.string,
  children: PropTypes.string.isRequired,
  sm: PropTypes.bool,
  href: PropTypes.string,
  title: PropTypes.string,
  isBlank: PropTypes.bool,
  theme: PropTypes.string,
  icon: PropTypes.string,
  iconPlace: PropTypes.string,
};