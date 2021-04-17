import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Link from '../Link';

const BreadcrumbItem = ({ className, children, href }) => {
  const _className = classNames(
    'fr-breadcrumb__item',
    {
      'fr-breadcrumb__item--current': !href,
    },
    className,
  );
  return (
    <li
      className={_className}
      aria-current={!href && 'page'}
      data-testid="bc-item"
    >
      {href ? <Link className="fr-breadcrumb__link" href={href}>{children}</Link> : children}
    </li>
  );
};

BreadcrumbItem.defaultProps = {
  className: '',
  href: '',
};

BreadcrumbItem.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  href: PropTypes.string,
};

export default BreadcrumbItem;
