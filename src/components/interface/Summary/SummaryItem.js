import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link/index';
import dataAttributes from '../../../utils/data-attributes';

const SummaryItem = ({
  href, target, children, className, asLink, ...remainingProps
}) => (
  <li
    {...dataAttributes.getAll(remainingProps)}
  >
    <Link
      as={asLink}
      isSimple
      href={href}
      target={target}
      className="fr-summary__link"
    >
      {children}
    </Link>
  </li>
);

SummaryItem.defaultProps = {
  className: '',
  href: '',
  target: '_self',
  asLink: null,
};

SummaryItem.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.string, PropTypes.object),
  ]),
  target: PropTypes.string,
  asLink: PropTypes.element,
};

export default SummaryItem;
