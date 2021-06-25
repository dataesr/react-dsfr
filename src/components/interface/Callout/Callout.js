import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

import './callouts.css';

/**
 *
 * @visibleName Callout
 */
const Callout = ({
  hasInfoIcon, children, className, ...remainingProps
}) => {
  const _className = classNames('fr-callout', className, {
    'fr-fi-information-line': hasInfoIcon,
  });
  return (
    <div
      className={_className}
      {...dataAttributes(remainingProps)}
    >
      {children}
    </div>
  );
};
Callout.propTypes = {
  hasInfoIcon: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
Callout.defaultProps = {
  hasInfoIcon: true,
  className: '',
};

export default Callout;
