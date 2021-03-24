import PropTypes from 'prop-types';
import Table from './Table';

const SimpleTable = ({ data, ...rest }) => {
  const headers = Object.keys(data?.[0]);
  return (
    <Table {...rest}>
      <thead>
        <tr key="headers">
          { headers.map((header) => (<th key={header} scope="col">{header}</th>)) }
        </tr>
      </thead>
      <tbody>
        {
          data.map((row) => (
            <tr key={row._id || row.id}>
              {
                Object.entries(row).map(
                  ([key, value]) => (<td key={`${row._id || row.id}_${key}`}>{value}</td>),
                )
              }
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
};

SimpleTable.defaultProps = {
  fixedLayout: false,
  noScroll: false,
  bordered: false,
  captionPosition: 'top',
  className: '',
};

SimpleTable.propTypes = {
  fixedLayout: PropTypes.bool,
  noScroll: PropTypes.bool,
  bordered: PropTypes.bool,
  captionPosition: PropTypes.oneOf(['top', 'bottom', 'none']),
  caption: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default SimpleTable;
