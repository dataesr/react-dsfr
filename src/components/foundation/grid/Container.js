import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getSpace } from '../../../utils/getters';
import { SCHEMES } from '../../../utils/constants';

/**
 *
 * @visibleName Container
 */
const Container = ({
  fluid, children, scheme, className, role, as, ...rest
}) => {
  const Tag = as ? `${as}` : 'div';
  const { margin, padding } = getSpace(rest);
  const _className = classNames(margin, padding, {
    'fr-container': !fluid,
    'fr-container-fluid': fluid,
    [`fr-scheme-${scheme}`]: scheme,
  }, className);
  return <Tag role={role || undefined} className={_className}>{children}</Tag>;
};

Container.defaultProps = {
  fluid: false,
  className: '',
  scheme: '',
  role: '',
  as: 'div',
  children: null,
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
  role: PropTypes.string,
  role: PropTypes.oneOf(['div', 'section']),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  scheme: PropTypes.oneOf(SCHEMES),
};

export default Container;
