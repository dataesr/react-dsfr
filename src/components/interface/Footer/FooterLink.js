import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from '../Link/index';
import dataAttributes from '../../../utils/data-attributes';

const FooterLink = ({
  children, href, section, className, asLink, ...remainingProps
}) => (
  <li
    className={classNames(`fr-footer__${section}-item`, className)}
    {...dataAttributes(remainingProps)}
  >
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
