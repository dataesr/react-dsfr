import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getSpace } from '../../utils/getters';
import '@gouvfr/all/dist/css/all.min.css';

/**
 * Design system Container
 *
 * @visibleName Container
 */
const Container = ({ fluid, children, ...rest }) => {
  const { margin, padding } = getSpace(rest);
  const className = classNames(
    { 'rf-container': !fluid },
    { 'fr-container-fluid': fluid },
    margin,
    padding,
  );
  return <div className={className}>{children}</div>;
};

Container.propTypes = {
  /**
  * Container children node (should be Rows)
  */
  children: PropTypes.node.isRequired,
  /**
  * Container with no outer margins
  */
  fluid: PropTypes.bool,
};
Container.defaultProps = {
  fluid: false,
};

export default Container;
