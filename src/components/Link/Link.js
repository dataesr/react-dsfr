import React from 'react';
import PropTypes from 'prop-types';
import '@gouvfr/links/dist/css/links.min.css';


/**
 * Le lien permet la navigation entre une page et un autre contenu au sein de la même page, du même site ou externe. 
 *
 * @visibleName Links
 */
const Link = ({
  children, size, href, title, target, isSimple, icon, iconPlace, 
}) => (
  <a
    href={href}
    title={title}
    target={target}
    rel={(target === '_blank') ? 'noopener noreferer' : null}
    className={`${(isSimple) ? 'rf-link' : ''} ${(icon) ? icon : ''} ${(icon) ? 'rf-link--icon-'+iconPlace : '' }`}
  >{children}</a>
);

export default Link;

Link.defaultProps = {
  href: '',
  title: '',
  target: '_self',
  isSimple: false,
  icon: '',
  iconPlace: 'right'
};

Link.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string,
  title: PropTypes.string,
  target: PropTypes.string,
  isSimple: PropTypes.bool,
  icon: PropTypes.string,
  iconPlace: PropTypes.string,
};