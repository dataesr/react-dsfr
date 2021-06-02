import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link/index';
import dataAttributes from '../../../utils/data-attributes';

const NavSubItem = ({
  title, link, current, asLink, ...remainingProps
}) => (
  <li
    key={title}
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
);

NavSubItem.defaultProps = {
  link: '',
  current: false,
  asLink: null,
};

NavSubItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  current: PropTypes.bool,
  asLink: PropTypes.element,
};

export default NavSubItem;
