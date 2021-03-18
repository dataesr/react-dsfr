import PropTypes from 'prop-types';

const NavSubItem = ({ title, link }) => (
  <li className="rf-menu__item" key={title}>
    <a className="rf-link" href={link} target="_self">
      {title}
    </a>
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
