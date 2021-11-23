import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getSpace } from '../../../utils/getters';

/**
 *
 * @visibleName Container
 */
const Container = ({
  fluid, children, className, role, spacing,
}) => {
  const { margin, padding } = getSpace(spacing);
  const _className = classNames(margin, padding, {
    'fr-container': !fluid,
    'fr-container-fluid': fluid,
  }, className);
  return <div role={role || undefined} className={_className}>{children}</div>;
};

Container.defaultProps = {
  fluid: false,
  className: '',
  role: '',
  children: null,
  spacing: null,
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
  spacing: PropTypes.string,
  role: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default Container;
