import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link/index';

const NavSubItem = ({ title, link, current }) => (
  <li key={title}>
    <Link className="fr-nav__link" href={link} current={current}>
      {title}
    </Link>
  </li>
);

NavSubItem.defaultProps = {
  link: '',
  current: false,
};
NavSubItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  current: PropTypes.bool,
};

export default NavSubItem;
