import PropTypes from 'prop-types';

const SideMenuLink = ({ children, href }) => (
  <li className="rf-sidemenu__item">
    <a className="rf-sidemenu__link" href={href} target="_self">{children}</a>
  </li>
);

SideMenuLink.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
export default SideMenuLink;
