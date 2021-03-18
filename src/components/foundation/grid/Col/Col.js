import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getSpace, getColSize, getScheme } from '../../../../utils/getters';
import { CLASS_NAME_TYPE, SCHEME_TYPE, CHILDREN_TYPE } from '../../../../utils/types';
/**
 * Design system Column
 *
 * @visibleName Col
 */
const Col = ({
  offset, n, scheme, children, className, ...rest
}) => {
  const { margin, padding } = getSpace(rest);
  const { n: size, offset: off } = getColSize(n, offset);
  const _scheme = getScheme(scheme);
  const _className = classNames(
    { 'rf-col': !n },
    off,
    size,
    padding,
    margin,
    className,
    _scheme,
  );
  return <div className={_className}>{children}</div>;
};

Col.propTypes = {
  /**
  * The actual text to display
  */
  children: CHILDREN_TYPE,
  /**
  * Col size in the grid
  */
  n: PropTypes.string,
  /**
  * Set Col offset.
  */
  offset: PropTypes.string,
  className: CLASS_NAME_TYPE,
  scheme: SCHEME_TYPE,
};
Col.defaultProps = {
  n: null,
  offset: null,
  className: '',
  scheme: '',
  children: null,
};

export default Col;
