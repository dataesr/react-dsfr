import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getSpace } from '../../../utils/getters';

/**
 *
 * @visibleName Row
 */
const Row = ({
  gutters, justifyContent, alignItems, children, className, spacing,
}) => {
  const { margin, padding } = getSpace(spacing);
  const _className = classNames(margin, padding, {
    'fr-grid-row': !gutters,
    'fr-grid-row fr-grid-row--gutters': gutters,
    [`fr-grid-row--${justifyContent}`]: justifyContent,
    [`fr-grid-row--${alignItems}`]: alignItems,
  }, className);
  return <div className={_className}>{children}</div>;
};

Row.propTypes = {
  /**
  * Row children (should always be Col)
  */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  /**
  * Add gutters to row
  */
  gutters: PropTypes.bool,
  spacing: PropTypes.string,
  /**
  * Vertical alignment of children
  */
  alignItems: PropTypes.oneOf(['top', 'middle', 'bottom']),
  /**
  * Horizontal alignement.
  */
  justifyContent: PropTypes.oneOf(['right', 'center', 'left']),
  className: PropTypes.string,
};
Row.defaultProps = {
  className: '',
  gutters: false,
  alignItems: null,
  justifyContent: null,
  children: null,
  spacing: '',
};

export default Row;
