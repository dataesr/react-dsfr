import React from 'react';
import PropTypes from 'prop-types';
import Table from './Table';

const SimpleTable = ({ data, ...remainingProps }) => {
  const headers = data.length > 0 ? Object.keys(data && data[0]) : ['Pas de données'];
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
  data: [],
  fixedLayout: false,
  fixedHeader: false,
  noScroll: false,
  bordered: false,
  captionPosition: 'top',
  className: '',
};

SimpleTable.propTypes = {
  fixedLayout: PropTypes.bool,
  fixedHeader: PropTypes.bool,
  noScroll: PropTypes.bool,
  bordered: PropTypes.bool,
  captionPosition: PropTypes.oneOf(['top', 'bottom', 'none']),
  caption: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  data: PropTypes.arrayOf(PropTypes.shape({})),
};
export default SimpleTable;
