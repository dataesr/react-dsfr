import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getSpace, getScheme } from '../../../../utils/getters';
import { CLASS_NAME_TYPE, SCHEME_TYPE, CHILDREN_TYPE } from '../../../../utils/types';
/**
 * Design system Row
 *
 * @visibleName Row
 */
const Row = ({
  gutter, justifyContent, alignItems, children, scheme, className, ...rest
}) => {
  const { margin, padding } = getSpace(rest);
  const _scheme = getScheme(scheme);
  const _className = classNames(
    { 'rf-grid-row': !gutter },
    { 'rf-grid-row rf-grid-row--gutters': gutter },
    { [`rf-grid-row--${justifyContent}`]: justifyContent },
    { [`rf-grid-row--${alignItems}`]: alignItems },
    margin,
    padding,
    className,
    _scheme,
  );
  return <div className={_className}>{children}</div>;
};

Row.propTypes = {
  /**
  * Row children (should always be Col)
  */
  children: CHILDREN_TYPE,
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
  className: CLASS_NAME_TYPE,
  scheme: SCHEME_TYPE,
};
Row.defaultProps = {
  className: '',
  gutter: false,
  alignItems: null,
  justifyContent: null,
  scheme: '',
  children: null,
};

export default Row;
