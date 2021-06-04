import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SCHEMES } from '../../../utils/constants';
import dataAttributes from '../../../utils/data-attributes';

import './highlights.css';

/**
 *
 * @visibleName Highlight
 */
const Highlight = ({
  scheme, size, children, className, ...remainingProps
}) => {
  const _className = classNames('fr-highlight', {
    [`fr-highlight--scheme-${scheme}`]: scheme,
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
  scheme: PropTypes.oneOf(SCHEMES),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  children: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
Highlight.defaultProps = {
  scheme: null,
  size: 'md',
  className: '',
};

export default Highlight;
