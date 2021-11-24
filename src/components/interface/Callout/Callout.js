import React, { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

/*
* DSFR v1.2
*/
import '@gouvfr/dsfr/dist/component/callout/callout.css';
import useTheme from '../SwitchTheme/useTheme';

/**
 *
 * @visibleName Callout
 */
const Callout = ({
  hasInfoIcon, children, className, colors, ...remainingProps
}) => {
  const theme = useTheme();
  const [color, backgroundColor] = colors;
  const calloutRef = useRef();
  const _className = classNames('fr-callout', className, {
    'fr-fi-information-line': hasInfoIcon,
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
