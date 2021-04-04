import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from '../Link';

const SkiplinkItem = ({
  href, target, children, className,
}) => (
  <li className={classNames(className)}>
    <Link isSimple href={href} target={target}>
      {children}
    </Link>
  </li>
);

SkiplinkItem.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.string, PropTypes.object),
  ]),
  target: PropTypes.string,
};

SkiplinkItem.defaultProps = {
  className: '',
  target: '_self',
};
export default SkiplinkItem;
