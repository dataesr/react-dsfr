import React, { forwardRef } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import dataAttributes from '../../../utils/data-attributes';

/**
 *
 * @visibleName TextInput
 */
const TextInput = forwardRef((props, ref) => {
  const {
    textarea,
    inactive,
    label,
    hint,
    message,
    value,
    onChange,
    messageType,
    className,
    placeholder,
    pattern,
    title,
    required,
    ...remainingProps
  } = props;

  const _classNameWrapper = classNames('fr-input-group', {
    [`fr-input-group--${messageType}`]: messageType,
  }, className);
  const _className = classNames('fr-input', {
    [`fr-input--${messageType}`]: messageType,
  });

  const inputId = uuidv4();
  const hintId = hint && uuidv4();
  const messageId = message && uuidv4();
  return (
    <div
      className={_classNameWrapper}
      {...dataAttributes(remainingProps)}
    >
      {label && (
      <label
        className="fr-label"
        htmlFor={inputId}
        aria-describedby={hintId || messageId || undefined}
      >
        {label}
        {required && <span className="error"> *</span>}
      </label>
      )}
      {hint && <p className="fr-hint-text" id={hintId}>{hint}</p>}
      {
        (textarea)
          ? (
            <textarea
              ref={ref}
              className={_className}
              disabled={inactive}
              id={inputId}
              value={value}
              placeholder={placeholder}
              pattern={pattern}
              title={title}
              required={required}
              onChange={onChange}
            />
          )
          : (
            <input
              ref={ref}
              className={_className}
              disabled={inactive}
              type="text"
              id={inputId}
              value={value}
              placeholder={placeholder}
              pattern={pattern}
              title={title}
              required={required}
              onChange={onChange}
            />
          )
    }
      {(message && messageType === 'error') && <p id={messageId} className="fr-error-text">{message}</p>}
      {(message && messageType === 'valid') && <p id={messageId} className="fr-valid-text">{message}</p>}
    </div>
  );
});
TextInput.defaultProps = {
  textarea: false,
  inactive: false,
  hint: '',
  onChange: () => {},
  messageType: '',
  message: '',
  label: null,
  className: '',
  placeholder: undefined,
  pattern: undefined,
  title: undefined,
  required: false,
};
TextInput.propTypes = {
  textarea: PropTypes.bool,
  inactive: PropTypes.bool,
  label: PropTypes.string,
  hint: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  messageType: PropTypes.oneOf(['error', 'valid', '']),
  message: PropTypes.string,
  placeholder: PropTypes.string,
  pattern: PropTypes.string,
  title: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default TextInput;
