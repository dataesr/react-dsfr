import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import Link from '../Link/index';

const SideMenuLink = ({
  children, href, to, className, ...remainingProps
}) => (
  <li
    className={classNames('fr-sidemenu__item', className)}
    {...dataAttributes(remainingProps)}
  >
    <Link
      className="fr-sidemenu__link"
      href={href}
      to={to}
    >
      {children}
    </Link>
  </li>
);

SideMenuLink.defaultProps = {
  className: '',
  to: undefined,
  href: undefined,
};

SideMenuLink.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default SideMenuLink;
