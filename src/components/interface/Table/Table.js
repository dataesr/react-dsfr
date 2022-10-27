import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Pagination from '../Pagination';

import dataAttributes from '../../../utils/data-attributes';

import './table.css';

import '@gouvfr/dsfr/dist/component/table/table.css';

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
  fixedHeader,
  className,
  tableID,
  tableClassName,
  columns,
  data,
  rowKey,
  pagination,
  paginationPosition,
  perPage,
  page,
  setPage,
  surrendingPages,
  ...remainingProps
}) => {
  const _className = classNames(
    'fr-table',
    {
      'fr-table--no-caption': (captionPosition === 'none'),
      'fr-table--caption-bottom': (captionPosition === 'bottom'),
      'fr-table--bordered': bordered,
      'fr-table--no-scroll': noScroll,
      'fr-table--layout-fixed': fixedLayout,
      'fr-table--header-fixed': fixedHeader,
      [`fr-react-table--pagination-${paginationPosition}`]: pagination,
    },
    className,
  );

  const [internalPage, setInternalPage] = useState(1);
  const [sort, setSort] = useState();
  const currentPage = page || internalPage;

  const manageSort = (column) => {
    if (sort && sort.column.name === column.name) {
      if (sort.direction === 'dsc') {
        setSort({ column, direction: 'asc' });
      } else {
        setSort();
      }
    } else {
      setSort({ column, direction: 'dsc' });
    }
  };

  let sortedData = data;
  if (sort) {
    let sortMethod = sort.column.sort;
    if (!sortMethod) {
      sortMethod = (a, b) => (a[sort.column.name] > b[sort.column.name] ? 1 : -1);
    }
    sortedData = data.sort((a, b) => {
      let current = a;
      let next = b;
      if (sort.direction === 'dsc') {
        current = b;
        next = a;
      }

      return sortMethod(current, next);
    });
  }

  const getSortIcon = (column) => {
    if (sort && sort.column.name === column.name) {
      return sort.direction === 'dsc'
        ? <span className="fr-fi fr-fi-arrow-down-s-line" aria-hidden="true" />
        : <span className="fr-fi fr-fi-arrow-up-s-line" aria-hidden="true" />;
    }

    return <span className="empty-sort-icon" />;
  };

  const getRowKey = typeof rowKey === 'string' ? (row) => row[rowKey] : rowKey;

  if (pagination) {
    sortedData = sortedData.slice((currentPage - 1) * perPage, currentPage * perPage);
  }

  const renderHeader = () => (
    <thead>
      <tr key="headers">
        {columns.map((column) => (
          <th
            className={classNames({ sortable: column.sortable })}
            scope="col"
            key={column.name}
            onClick={() => {
              if (column.sortable) {
                manageSort(column);
              }
            }}
          >
            <div className="table-column-header">
              {column.headerRender ? column.headerRender() : column.label}
              {column.sortable && getSortIcon(column)}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );

  return (
    <div
      className={_className}
      {...dataAttributes.getAll(remainingProps)}
    >
      <table id={tableID || undefined} className={tableClassName || undefined}>
        <caption>{caption}</caption>
        {renderHeader()}
        <tbody>
          {sortedData
            .map((row) => (
              <tr key={getRowKey(row)}>
                {columns.map((column) => (
                  <td
                    key={column.name}
                    className={column.cellClassRender && column.cellClassRender(row)}
                  >
                    {column.render ? column.render(row) : row[column.name]}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
      {pagination && data.length > 0 && (
        <Pagination
          currentPage={Math.min(currentPage, Math.ceil(data.length / perPage))}
          onClick={page ? setPage : setInternalPage}
          pageCount={Math.ceil(data.length / perPage)}
          surrendingPages={surrendingPages}
        />
      )}
    </div>
  );
};

Table.defaultProps = {
  fixedLayout: false,
  fixedHeader: false,
  noScroll: false,
  bordered: false,
  caption: undefined,
  captionPosition: 'top',
  className: '',
  tableID: '',
  tableClassName: '',
  children: null,
  pagination: false,
  paginationPosition: 'left',
  surrendingPages: 3,
  perPage: 10,
  page: undefined,
  setPage: () => {},
};

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
  fixedLayout: PropTypes.bool,
  fixedHeader: PropTypes.bool,
  tableID: PropTypes.string,
  tableClassName: PropTypes.string,
  noScroll: PropTypes.bool,
  bordered: PropTypes.bool,
  captionPosition: PropTypes.oneOf(['top', 'bottom', 'none']),
  caption: PropTypes.string,
  rowKey: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]).isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  pagination: PropTypes.bool,
  paginationPosition: PropTypes.oneOf(['left', 'center', 'right']),
  surrendingPages: PropTypes.number,
  perPage: PropTypes.number,
  page: PropTypes.number,
  setPage: PropTypes.func,
};
export default Table;
