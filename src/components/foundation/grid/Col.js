import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getSpace, getColSize } from '../../../utils/getters';

/**
 *
 * @visibleName Col
 */
const Col = ({
  offset, n, children, className, spacing,
}) => {
  const { margin, padding } = getSpace(spacing);
  const { n: size, offset: off } = getColSize(n, offset);
  const _className = classNames(off, size, padding, margin, {
    'fr-col': !n,
  }, className);
  return <div className={_className}>{children}</div>;
};

Col.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  spacing: PropTypes.string,
  /**
  * Col size
  */
  n: PropTypes.string,
  /**
  * Set Col offset.
  */
  offset: PropTypes.string,
  className: PropTypes.string,
};
Col.defaultProps = {
  n: '',
  offset: null,
  className: '',
  children: null,
  spacing: '',
};

export default Col;
