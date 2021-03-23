import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getSpace, getColSize } from '../../../../utils/getters';
import { SCHEMES } from '../../../../utils/constants';

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
  const _className = classNames(off, size, padding, margin, {
    'rf-col': !n,
    [`rf-scheme-${scheme}`]: scheme,
  }, className);
  return <div className={_className}>{children}</div>;
};

Col.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  /**
  * Col size
  */
  n: PropTypes.string,
  /**
  * Set Col offset.
  */
  offset: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  scheme: PropTypes.oneOf(SCHEMES),
};
Col.defaultProps = {
  n: null,
  offset: null,
  className: '',
  scheme: '',
  children: null,
};

export default Col;
