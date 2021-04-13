import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getSpace } from '../../../utils/getters';
import { SCHEMES } from '../../../utils/constants';

/**
 *
 * @visibleName Row
 */
const Row = ({
  gutters, justifyContent, alignItems, children, scheme, className, ...rest
}) => {
  const { margin, padding } = getSpace(rest);
  const _className = classNames(margin, padding, {
    'rf-grid-row': !gutters,
    'rf-grid-row rf-grid-row--gutters': gutters,
    [`rf-grid-row--${justifyContent}`]: justifyContent,
    [`rf-grid-row--${alignItems}`]: alignItems,
    [`rf-scheme-${scheme}`]: scheme,
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
  /**
  * Vertical alignment of children
  */
  alignItems: PropTypes.oneOf(['start', 'middle', 'end']),
  /**
  * Horizontal alignement.
  */
  justifyContent: PropTypes.oneOf(['start', 'center', 'end']),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  scheme: PropTypes.oneOf(SCHEMES),
};
Row.defaultProps = {
  className: '',
  gutters: false,
  alignItems: null,
  justifyContent: null,
  scheme: '',
  children: null,
};

export default Row;
