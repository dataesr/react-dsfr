import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from '../Link';

const SideMenuLink = ({ children, href, className }) => (
  <li className={classNames('fr-sidemenu__item', className)}>
    <Link className="fr-sidemenu__link" href={href}>
      {children}
    </Link>
  </li>
);

SideMenuLink.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
SideMenuLink.defaultProps = { className: '' };
export default SideMenuLink;
