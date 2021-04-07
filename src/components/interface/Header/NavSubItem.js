import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';

const NavSubItem = ({ title, link }) => (
  <li className="rf-menu__item" key={title}>
    <Link className="rf-link" href={link}>
      {title}
    </Link>
  </li>
);

NavSubItem.defaultProps = {
  link: '',
};
NavSubItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default NavSubItem;
