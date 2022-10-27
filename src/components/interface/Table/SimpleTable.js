import React from 'react';
import PropTypes from 'prop-types';
import Table from './Table';

const SimpleTable = ({ data, emptyDataMessage, ...remainingProps }) => {
  const headers = data.length > 0 ? Object.keys(data && data[0]) : [emptyDataMessage];
  return (
    <Table
      {...remainingProps}
      columns={headers.map((header) => ({ name: header, label: header }))}
      data={data}
      rowKey="id"
    />
  );
};

SimpleTable.defaultProps = {
  emptyDataMessage: 'Pas de données',
  fixedLayout: false,
  fixedHeader: false,
  noScroll: false,
  bordered: false,
  captionPosition: 'top',
  className: '',
};

SimpleTable.propTypes = {
  emptyDataMessage: PropTypes.string,
  fixedLayout: PropTypes.bool,
  fixedHeader: PropTypes.bool,
  noScroll: PropTypes.bool,
  bordered: PropTypes.bool,
  captionPosition: PropTypes.oneOf(['top', 'bottom', 'none']),
  caption: PropTypes.string.isRequired,
  className: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
export default SimpleTable;
