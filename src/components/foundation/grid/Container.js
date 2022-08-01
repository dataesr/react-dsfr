import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getSpace } from '../../../utils/getters';

/**
 *
 * @visibleName Container
 */
const Container = ({
  as, fluid, children, className, role, spacing,
}) => {
  const HtmlTag = `${as}`;
  const { margin, padding } = getSpace(spacing);
  const _className = classNames(margin, padding, {
    'fr-container': !fluid,
    'fr-container-fluid': fluid,
  }, className);
  return (
    <HtmlTag role={role || undefined} className={_className}>
      {children}
    </HtmlTag>
  );
};

Container.defaultProps = {
  as: 'div',
  fluid: false,
  className: '',
  role: '',
  children: null,
  spacing: '',
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
  as: PropTypes.oneOf([
    'article',
    'aside',
    'header',
    'footer',
    'main',
    'nav',
    'section',
  ]),
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
