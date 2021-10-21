import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

import '@gouvfr/dsfr/dist/css/callouts.min.css';

/**
 *
 * @visibleName Callout
 */
const Callout = ({
  hasInfoIcon, children, className, colors, ...remainingProps
}) => {
  const [color, backgroundColor] = colors;
  const calloutRef = useRef();
  const _className = classNames('fr-callout', className, {
    'fr-fi-information-line': hasInfoIcon,
  });

  useEffect(() => {
    if (color && calloutRef.current) {
      calloutRef.current.style.boxShadow = `inset .25rem 0 0 0 ${color}`;
      calloutRef.current.style.backgroundColor = backgroundColor;
    }
  }, [color, backgroundColor]);

  return (
    <div
      ref={calloutRef}
      className={_className}
      {...dataAttributes.getAll(remainingProps)}
    >
      {children}
    </div>
  );
};

Callout.defaultProps = {
  hasInfoIcon: true,
  className: '',
  colors: [],
};

Callout.propTypes = {
  hasInfoIcon: PropTypes.bool,
  /**
   * first color is color of the border, second is background
   * be careful with contrast
   */
  colors: PropTypes.arrayOf(PropTypes.string),
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

export default Callout;
