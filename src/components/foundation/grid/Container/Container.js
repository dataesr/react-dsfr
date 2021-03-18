import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getSpace, getScheme } from '../../../../utils/getters';
import { CLASS_NAME_TYPE, SCHEME_TYPE, CHILDREN_TYPE } from '../../../../utils/types';

/**
 * Design system Container
 *
 * @visibleName Container
 */
const Container = ({
  fluid, children, scheme, className, ...rest
}) => {
  const { margin, padding } = getSpace(rest);
  const _scheme = getScheme(scheme);
  const _className = classNames(
    { 'rf-container': !fluid },
    { 'rf-container-fluid': fluid },
    margin,
    padding,
    className,
    _scheme,
  );
  return <div className={_className}>{children}</div>;
};

Container.propTypes = {
  /**
  * Container children node (should be Rows)
  */
  children: CHILDREN_TYPE,
  /**
  * Container with no outer margins
  */
  fluid: PropTypes.bool,
  className: CLASS_NAME_TYPE,
  scheme: SCHEME_TYPE,
};
Container.defaultProps = {
  fluid: false,
  className: '',
  scheme: '',
  children: null,
};

export default Container;
