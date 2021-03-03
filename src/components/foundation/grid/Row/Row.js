import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getSpace } from '../../../../utils/getters';

/**
 * Design system Row
 *
 * @visibleName Row
 */
const Row = ({
  gutter, justifyContent, alignItems, children, ...rest
}) => {
  const { margin, padding } = getSpace(rest);
  const className = classNames(
    { 'rf-grid-row': !gutter },
    { 'rf-grid-row rf-grid-row--gutters': gutter },
    { [`rf-grid-row--${justifyContent}`]: justifyContent },
    { [`rf-grid-row--${alignItems}`]: alignItems },
    margin,
    padding,
  );
  return <div className={className}>{children}</div>;
};

Row.propTypes = {
  /**
  * Row children (should always be Col)
  */
  children: PropTypes.node.isRequired,
  /**
  * Add gutter to row
  */
  gutter: PropTypes.bool,
  /**
  * Vertical alignment of children
  */
  alignItems: PropTypes.oneOf(['start', 'middle', 'end']),
  /**
  * Horizontal alignement.
  */
  justifyContent: PropTypes.oneOf(['start', 'center', 'end']),
};
Row.defaultProps = {
  gutter: false,
  alignItems: null,
  justifyContent: null,
};

export default Row;
