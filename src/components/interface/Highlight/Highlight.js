import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

/*
* DSFR v1.2
*/
import '@gouvfr/dsfr/dist/component/highlight/highlight.css';
import colorFamilies from '../../../utils/variables';

/**
 *
 * @visibleName Highlight
 */
const Highlight = ({
  size, children, className, color, colorFamily, ...remainingProps
}) => {
  const highlightRef = useRef();
  const _className = classNames(
    'fr-highlight',
    className,
    { [`fr-highlight--${colorFamily}`]: colorFamily },
  );

  useEffect(() => {
    if (color && highlightRef.current) {
      highlightRef.current.style.boxShadow = `inset 0.25rem 0 0 0 ${color}`;
    }
  }, [color]);

  return (
    <div
      ref={highlightRef}
      className={_className}
      {...dataAttributes.getAll(remainingProps)}
    >
      <p className={`fr-text--${size}`}>
        {children}
      </p>
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
  colorFamily: PropTypes.oneOf([...colorFamilies, '']),
};
Highlight.defaultProps = {
  size: 'md',
  className: '',
  color: '',
  colorFamily: '',
};

export default Highlight;
