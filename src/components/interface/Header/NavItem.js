import React, { Children } from 'react';
import PropTypes from 'prop-types';

import dataAttributes from '../../../utils/data-attributes';
import Link from '../Link/index';

import NavItemWithSubItems from './NavItemWithSubItems';

const NavItem = ({
  children, title, link, path, current, asLink, ...remainingProps
}) => {
  const subItems = Children.toArray(children).filter(
    (child) => child.props && child.props.__TYPE === 'NavSubItem',
  );

  return (
    subItems && subItems.length > 0 ? (
      <NavItemWithSubItems
        title={title}
        link={link}
        path={path}
        current={current}
        asLink={asLink}
        {...remainingProps}
      >
        {subItems}
      </NavItemWithSubItems>
    ) : (
      <li
        className="fr-nav__item"
        {...dataAttributes(remainingProps)}
      >
        <Link
          as={asLink}
          className="fr-nav__link"
          href={link}
          current={current}
        >
          {title}
        </Link>
      </li>
    )
  );
};

NavItem.defaultProps = {
  link: '',
  children: '',
  current: false,
  path: '',
  asLink: null,
};

NavItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  current: PropTypes.bool,
  asLink: PropTypes.element,
  /**
   * @ignore
   */
  path: PropTypes.string,
};

export default NavItem;
