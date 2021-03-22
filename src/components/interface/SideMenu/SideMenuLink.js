import PropTypes from 'prop-types';
import classNames from 'classnames';

const SideMenuLink = ({ children, href, className }) => (
  <li className={classNames('rf-sidemenu__item', className)}>
    <a className="rf-sidemenu__link" href={href} target="_self">{children}</a>
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
