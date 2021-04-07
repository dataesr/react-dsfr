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
  const inlineClass = (isInline) ? 'rf-fieldset--inline' : null;
  const messageClasses = (messageType !== '') ? `rf-fieldset--${messageType}` : null;
  const classes = classNames('rf-form-group', className, inlineClass, messageClasses);
  return (
    <div className={classes}>
      <fieldset className="rf-fieldset" disabled={isDisabled}>
        {legend && <legend className="rf-fieldset__legend">{legend}</legend>}
        {hint && <p className="rf-hint-text">{hint}</p>}
        <div className="rf-fieldset__content">
          {children}
        </div>
        {(message && messageType) && <p className={`rf-${messageType}-text`}>{message}</p>}
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
