import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

import '@gouvfr/dsfr/dist/css/highlights.min.css';

/**
 *
 * @visibleName Highlight
 */
const Highlight = ({
  size, children, className, color, ...remainingProps
}) => {
  const highlightRef = useRef();
  const _className = classNames('fr-highlight', {
    [`fr-highlight--${size}`]: (['sm', 'lg'].includes(size)),
  }, className);

  useEffect(() => {
    if (color && highlightRef.current) {
      highlightRef.current.style.borderLeftColor = `${color}`;
    }
  }, [color]);

  return (
    <div
      ref={highlightRef}
      className={_className}
      {...dataAttributes.getAll(remainingProps)}
    >
      {children}
    </div>
  );
};
Highlight.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  color: PropTypes.string,
};
Highlight.defaultProps = {
  size: 'md',
  className: '',
  color: PropTypes.string,
};

export default Highlight;
