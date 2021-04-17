import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 *
 * @visibleName RadioGroup
 */
const RadioGroup = ({
  children,
  className,
  hint,
  isDisabled,
  isInline,
  legend,
  message,
  messageType,
}) => {
  const inlineClass = (isInline) ? 'fr-fieldset--inline' : null;
  const messageClasses = (messageType !== '') ? `fr-fieldset--${messageType}` : null;
  const classes = classNames('fr-form-group', className, inlineClass, messageClasses);
  return (
    <div className={classes}>
      <fieldset className="fr-fieldset" disabled={isDisabled}>
        {legend && <legend className="fr-fieldset__legend">{legend}</legend>}
        {hint && <p className="fr-hint-text">{hint}</p>}
        <div className="fr-fieldset__content">
          {children}
        </div>
        {(message && messageType) && <p className={`fr-${messageType}-text`}>{message}</p>}
      </fieldset>
    </div>
  );
};

RadioGroup.defaultProps = {
  children: '',
  className: '',
  hint: '',
  isDisabled: false,
  isInline: false,
  legend: '',
  messageType: '',
  message: '',
};

RadioGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  hint: PropTypes.string,
  isDisabled: PropTypes.bool,
  isInline: PropTypes.bool,
  legend: PropTypes.string,
  message: PropTypes.string,
  messageType: PropTypes.oneOf(['error', 'valid', '']),
};

export default RadioGroup;
