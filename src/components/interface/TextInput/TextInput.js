import React, { forwardRef, useRef, useState } from 'react';

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
    type,
    label,
    hint,
    message,
    messageType,
    className,
    required,
    warning,
    onBlur,
    withAutoValidation,
    ...remainingProps
  } = props;

  const [validation, setValidation] = useState({ status: '', message: undefined });

  const internalMessageType = withAutoValidation ? validation.status : messageType;
  const internalMessage = withAutoValidation ? validation.message : message;
  const _classNameWrapper = classNames('fr-input-group', {
    [`fr-input-group--${internalMessageType}`]: internalMessageType,
  }, className);
  const _className = classNames('fr-input', {
    [`fr-input--${internalMessageType}`]: internalMessageType,
  });

  const _wrapperClassName = classNames('fr-input-wrap', {
    'fr-fi-calendar-line': type === 'date',
    'fr-fi-alert-line': warning,
  });

  const inputId = useRef(uuidv4());
  const hintId = useRef(uuidv4());
  return (
    <div
      className={_classNameWrapper}
      {...dataAttributes.getAll(remainingProps)}
    >
      {label && (
        <label
          className="fr-label"
          htmlFor={inputId.current}
          aria-describedby={hint && hintId.current}
        >
          {label}
          {required && <span className="error"> *</span>}
          {hint && <p className="fr-hint-text" id={hintId.current}>{hint}</p>}
        </label>
      )}
      {
                (textarea)
                  ? (
                    <textarea
                      {...dataAttributes.filterAll(remainingProps)}
                      ref={ref}
                      className={_className}
                      id={inputId.current}
                      required={required}
                      onBlur={(e) => {
                        if (withAutoValidation) {
                          setValidation({
                            status: e.target.validity.valid ? 'valid' : 'error',
                            message: e.target.validationMessage,
                          });
                        }
                        onBlur(e);
                      }}
                    />
                  )
                  : (
                    <div className={_wrapperClassName}>
                      <input
                        {...dataAttributes.filterAll(remainingProps)}
                        ref={ref}
                        type={type}
                        className={_className}
                        id={inputId.current}
                        required={required}
                        onBlur={(e) => {
                          if (withAutoValidation) {
                            setValidation({
                              status: e.target.validity.valid ? 'valid' : 'error',
                              message: e.target.validationMessage,
                            });
                          }
                          onBlur(e);
                        }}
                      />
                    </div>
                  )
            }
      {(internalMessage && internalMessageType)
                && <p className={`fr-${internalMessageType}-text`}>{internalMessage}</p>}
    </div>
  );
});

TextInput.defaultProps = {
  textarea: false,
  warning: false,
  hint: '',
  messageType: '',
  message: '',
  label: null,
  className: '',
  type: 'text',
  required: false,
  withAutoValidation: false,
  onBlur: () => {
  },
};

TextInput.propTypes = {
  type: PropTypes.oneOf(['date', 'text', 'number', 'password']),
  warning: PropTypes.bool,
  textarea: PropTypes.bool,
  label: PropTypes.string,
  hint: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  messageType: PropTypes.oneOf(['error', 'valid', '']),
  message: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  withAutoValidation: PropTypes.bool,
  onBlur: PropTypes.func,
};

export default TextInput;
