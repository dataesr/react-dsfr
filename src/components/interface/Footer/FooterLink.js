import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from '../Link/index';

const FooterLink = ({
  children, href, section, className, asLink,
}) => (
  <li className={classNames(`fr-footer__${section}-item`, className)}>
    <Link
      as={asLink}
      href={href}
      className={`fr-footer__${section}-link`}
    >
      {children}
    </Link>
  </li>
);

FooterLink.defaultProps = {
  section: null,
  className: '',
  asLink: null,
  href: '',
};

FooterLink.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string,
  section: PropTypes.oneOf(['bottom', 'top']),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  asLink: PropTypes.element,
};

export default FooterLink;
