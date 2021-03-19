import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Tableau de données
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
}) => {
  const classes = classNames(
    'rf-table',
    {
      'rf-table--no-caption': (captionPosition === 'none'),
      'rf-table--caption-bottom': (captionPosition === 'bottom'),
      'rf-table--bordered': bordered,
      'rf-table--no-scroll': noScroll,
      'rf-table--layout-fixed': fixedLayout,
    },
    className,
  );
  return (
    <div className={classes} data-testid="table">
      <table>
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
  children: null,
};

Table.propTypes = {
  fixedLayout: PropTypes.bool,
  noScroll: PropTypes.bool,
  bordered: PropTypes.bool,
  captionPosition: PropTypes.oneOf(['top', 'bottom', 'none']),
  caption: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Table;
