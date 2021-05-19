import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './table.css';

/**
 *
 * @visibleName Table
 */
const Table = ({
  children,
  noScroll,
  caption,
  captionPosition,
  bordered,
  fixedLayout,
  className,
  tableID,
  tableClassName,
}) => {
  const _className = classNames('fr-table', {
    'fr-table--no-caption': (captionPosition === 'none'),
    'fr-table--caption-bottom': (captionPosition === 'bottom'),
    'fr-table--bordered': bordered,
    'fr-table--no-scroll': noScroll,
    'fr-table--layout-fixed': fixedLayout,
  }, className);
  return (
    <div
      className={_className}
      data-testid="table"
    >
      <table id={tableID || undefined} className={tableClassName || undefined}>
        <caption data-testid="table-caption">{caption}</caption>
        {children}
      </table>
    </div>
  );
};

Table.defaultProps = {
  fixedLayout: false,
  noScroll: false,
  bordered: false,
  captionPosition: 'top',
  className: '',
  tableID: '',
  tableClassName: '',
  children: null,
};

Table.propTypes = {
  fixedLayout: PropTypes.bool,
  tableID: PropTypes.string,
  tableClassName: PropTypes.string,
  noScroll: PropTypes.bool,
  bordered: PropTypes.bool,
  captionPosition: PropTypes.oneOf(['top', 'bottom', 'none']),
  caption: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
export default Table;
