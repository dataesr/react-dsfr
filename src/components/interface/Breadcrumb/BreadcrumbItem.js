import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Link from '../Link/index';

const BreadcrumbItem = ({
  className, children, href, asLink,
}) => {
  const _className = classNames(
    'fr-breadcrumb__item', { 'fr-breadcrumb__item--current': !href }, className,
  );

  return (
    <li
      className={_className}
      data-testid="bc-item"
    >
      <Link
        current={!href && !asLink}
        className="fr-breadcrumb__link"
        as={asLink}
        href={href}
      >
        {children}
      </Link>
    </li>
  );
};

BreadcrumbItem.defaultProps = {
  className: '',
  href: '',
  asLink: null,
};

BreadcrumbItem.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  href: PropTypes.string,
  asLink: PropTypes.element,
};

export default BreadcrumbItem;
