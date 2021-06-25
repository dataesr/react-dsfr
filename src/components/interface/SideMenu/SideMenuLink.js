import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import Link from '../Link/index';

const SideMenuLink = ({
  children, href, className, asLink, onClick, ...remainingProps
}) => (
  <li
    className={classNames('fr-sidemenu__item', className)}
    {...dataAttributes(remainingProps)}
  >
    <Link
      as={asLink}
      className="fr-sidemenu__link"
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  </li>
);

SideMenuLink.defaultProps = {
  className: '',
  href: '',
  asLink: null,
  onClick: () => {},
};

SideMenuLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  href: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  asLink: PropTypes.element,
  onClick: PropTypes.func,
};

export default SideMenuLink;
