import React, { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import colorFamilies from '../../../utils/variables';
import useTheme from '../SwitchTheme/useTheme';

import '@gouvfr/dsfr/dist/component/callout/callout.css';

/**
 *
 * @visibleName Callout
 */
const Callout = ({
  hasInfoIcon, children, className, colorFamily, colors, ...remainingProps
}) => {
  const theme = useTheme();
  const [color, backgroundColor] = colors;
  const calloutRef = useRef();
  const _className = classNames('fr-callout', className, {
    'fr-fi-information-line': hasInfoIcon,
    [`fr-callout--${colorFamily}`]: colorFamily,
  });

  const colorCallout = useCallback(() => {
    calloutRef.current.style.boxShadow = `inset .25rem 0 0 0 ${color}`;
    calloutRef.current.style.backgroundColor = backgroundColor;
  }, [backgroundColor, color]);

  useEffect(() => {
    if (color && backgroundColor && calloutRef.current && theme === 'light') {
      colorCallout();
    }
  }, [color, backgroundColor, colorCallout, theme]);

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
  colorFamily: '',
};

Callout.propTypes = {
  hasInfoIcon: PropTypes.bool,
  colorFamily: PropTypes.oneOf([...colorFamilies, '']),
  /**
   * first color is color of the border, second is background
   * be careful with contrast
   */
  colors: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};

export default Callout;
