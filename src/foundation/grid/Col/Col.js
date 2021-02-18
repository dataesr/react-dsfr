import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getSpace, getColSize } from '../../../utils/getters';

/**
 * Design system Column
 *
 * @visibleName Col
 */
const Col = ({
  offset, n, children, ...rest
}) => {
  const { margin, padding } = getSpace(rest);
  const { n: size, offset: off } = getColSize(n, offset);
  const className = classNames(
    { 'rf-col': !n },
    off,
    size,
    padding,
    margin,
  );
  return <div className={className}>{children}</div>;
};

Col.propTypes = {
  /**
  * The actual text to display
  */
  children: PropTypes.node.isRequired,
  /**
  * Col size in the grid
  */
  n: PropTypes.string,
  /**
  * Set Col offset.
  */
  offset: PropTypes.string,
};
Col.defaultProps = {
  n: null,
  offset: null,
};

export default Col;
