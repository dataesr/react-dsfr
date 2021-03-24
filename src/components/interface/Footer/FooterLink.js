import PropTypes from 'prop-types';
import classNames from 'classnames';

const FooterLink = ({
  children, href, section, className,
}) => (
  <li className={classNames(`rf-footer__${section}-item`, className)}>
    <a className={`rf-footer__${section}-link`} href={href}>{children}</a>
  </li>
);
FooterLink.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  section: PropTypes.oneOf(['bottom', 'top']),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
FooterLink.defaultProps = {
  section: null,
  className: '',
};

export default FooterLink;
