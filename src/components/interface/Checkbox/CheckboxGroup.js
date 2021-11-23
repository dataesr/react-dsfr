import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import useTheme from '../SwitchTheme/useTheme';

/**
 *
 * @visibleName CheckboxGroup
 */
const CheckboxGroup = ({
  children,
  className,
  hint,
  isInline,
  legend,
  message,
  messageType,
  checkboxColors,
  ariaLabel,
  required,
  ...remainingProps
}) => {
  const _className = classNames('fr-form-group', {
    'fr-fieldset--inline': isInline,
    [`fr-fieldset--${messageType}`]: messageType,
    'ds-fr-checkbox': checkboxColors.length,
  }, className);
  const backgroundColor = checkboxColors[0];
  const color = checkboxColors[1];
  const theme = useTheme();

  const colorCheckbox = useCallback(() => {
    if (backgroundColor) {
      document.documentElement.style.setProperty('--checkbox-color1', backgroundColor);
    }

    if (color) {
      document.documentElement.style.setProperty('--checkbox-color2', color);
    }
  }, [backgroundColor, color]);

  useEffect(() => {
    if (theme === 'light') {
      colorCheckbox();
    }
  }, [color, theme, colorCheckbox]);

  return (
    <div
      className={_className}
      {...dataAttributes.getAll(remainingProps)}
    >
      <fieldset className="fr-fieldset" aria-label={ariaLabel || legend}>
        {legend && (
        <legend className="fr-fieldset__legend">
          {legend}
          {required && <span className="error"> *</span>}
        </legend>
        )}
        {hint && <p className="fr-hint-text">{hint}</p>}
        <div className="fr-fieldset__content">
          {children}
        </div>
        {(message && messageType) && <p className={`fr-${messageType}-text`}>{message}</p>}
      </fieldset>
    </div>
  );
};

CheckboxGroup.defaultProps = {
  className: '',
  hint: '',
  isInline: false,
  messageType: '',
  message: '',
  ariaLabel: '',
  required: false,
  checkboxColors: [],
};

CheckboxGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  hint: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  ariaLabel: PropTypes.string,
  isInline: PropTypes.bool,
  legend: PropTypes.string.isRequired,
  message: PropTypes.string,
  messageType: PropTypes.oneOf(['error', 'valid', '']),
  required: PropTypes.bool,
  /**
   * color[0] is background, color[1] is color
   */
  checkboxColors: PropTypes.arrayOf(PropTypes.string),
};

export default CheckboxGroup;
