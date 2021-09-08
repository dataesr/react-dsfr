import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from '../Link/index';
import dataAttributes from '../../../utils/data-attributes';

const SkiplinkItem = ({
  href, target, children, className, asLink, ...remainingProps
}) => (
  <li
    className={classNames(className)}
    {...dataAttributes.getAll(remainingProps)}
  >
    <Link
      as={asLink}
      isSimple
      href={href}
      target={target}
    >
      {children}
    </Link>
  </li>
);

SkiplinkItem.defaultProps = {
  className: '',
  href: '',
  target: '_self',
  asLink: null,
};

SkiplinkItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  href: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.string, PropTypes.object),
  ]),
  target: PropTypes.string,
  asLink: PropTypes.element,
};

export default SkiplinkItem;
