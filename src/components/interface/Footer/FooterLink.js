import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from '../Link/index';

const FooterLink = ({
  children, href, section, className,
}) => (
  <li className={classNames(`fr-footer__${section}-item`, className)}>
    <Link href={href} className={`fr-footer__${section}-link`}>
      {children}
    </Link>
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
