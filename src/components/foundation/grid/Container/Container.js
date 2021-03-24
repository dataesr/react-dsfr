import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getSpace } from '../../../../utils/getters';
import { SCHEMES } from '../../../../utils/constants';

/**
 * Design system Container
 *
 * @visibleName Container
 */
const Container = ({
  fluid, children, scheme, className, ...rest
}) => {
  const { margin, padding } = getSpace(rest);
  const _className = classNames(margin, padding, {
    'rf-container': !fluid,
    'rf-container-fluid': fluid,
    [`rf-scheme-${scheme}`]: scheme,
  }, className);
  return <div className={_className}>{children}</div>;
};

Container.propTypes = {
  /**
  * Container children node (should be Rows)
  */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  /**
  * Container with no outer margins
  */
  fluid: PropTypes.bool,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  scheme: PropTypes.oneOf(SCHEMES),
};
Container.defaultProps = {
  fluid: false,
  className: '',
  scheme: '',
  children: null,
};

export default Container;
