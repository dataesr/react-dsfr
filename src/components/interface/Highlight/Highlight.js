import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

import './highlights.css';

/**
 *
 * @visibleName Highlight
 */
const Highlight = ({
  size, children, className, ...remainingProps
}) => {
  const _className = classNames('fr-highlight', {
    [`fr-highlight--${size}`]: (['sm', 'lg'].includes(size)),
  }, className);
  return (
    <div
      className={_className}
      {...dataAttributes(remainingProps)}
    >
      {children}
    </div>
  );
};
Highlight.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  children: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
Highlight.defaultProps = {
  size: 'md',
  className: '',
};

export default Highlight;
