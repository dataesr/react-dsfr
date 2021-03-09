import PropTypes from 'prop-types';

const FooterLink = ({ children, href, section }) => (
  <li className={`rf-footer__${section}-item`}>
    <a className={`rf-footer__${section}-link`} href={href}>{children}</a>
  </li>
);
FooterLink.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  section: PropTypes.oneOf(['bottom', 'top']),
};
FooterLink.defaultProps = {
  section: null,
};

export default FooterLink;
