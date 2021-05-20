import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from '../Link/index';

const SideMenuLink = ({
  children, href, className, asLink,
}) => (
  <li className={classNames('fr-sidemenu__item', className)}>
    <Link
      as={asLink}
      className="fr-sidemenu__link"
      href={href}
    >
      {children}
    </Link>
  </li>
);

SideMenuLink.defaultProps = {
  className: '',
  asLink: null,
};

SideMenuLink.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  asLink: PropTypes.element,
};

export default SideMenuLink;
