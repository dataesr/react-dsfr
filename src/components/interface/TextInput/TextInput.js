import { forwardRef, useRef, useState } from 'react';

import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import dataAttributes from '../../../utils/data-attributes';

/**
 *
 * @visibleName TextInput
 */
const TextInput = forwardRef((props, ref) => {
  const {
    className,
    disabled,
    hint,
    label,
    message,
    messageType,
    onBlur,
    required,
    textarea,
    type,
    withAutoValidation,
    ...remainingProps
  } = props;

  const [validation, setValidation] = useState({
    status: '',
    message: undefined,
  });

  const internalMessageType = withAutoValidation
    ? validation.status
    : messageType;
  const internalMessage = withAutoValidation ? validation.message : message;
  const _classNameWrapper = classNames(
    'fr-input-group',
    {
      [`fr-input-group--${internalMessageType}`]: internalMessageType,
      'fr-input-group--disabled': disabled,
    },
    className,
  );
  const _className = classNames('fr-input', {
    [`fr-input--${internalMessageType}`]: internalMessageType,
  });

  const inputId = useRef(uuidv4());
  const hintId = useRef(uuidv4());
  return (
    <div
      className={_classNameWrapper}
      {...dataAttributes.getAll(remainingProps)}
    >
      {label && (
        <label className="fr-label" htmlFor={inputId.current}>
          {label}
          {required && <span className="error"> *</span>}
          {hint && (
            <p className="fr-hint-text" id={hintId.current}>
              {hint}
            </p>
          )}
        </label>
      )}
      {textarea ? (
        <textarea
          className={_className}
          disabled={disabled}
          id={inputId.current}
          onBlur={(e) => {
            if (withAutoValidation) {
              setValidation({
                message: e.target.validationMessage,
                status: e.target.validity.valid ? 'valid' : 'error',
              });
            }
            onBlur(e);
          }}
          ref={ref}
          required={required}
          {...dataAttributes.filterAll(remainingProps)}
        />
      ) : (
        <input
          aria-describedby={hint && hintId.current}
          className={_className}
          disabled={disabled}
          id={inputId.current}
          onBlur={(e) => {
            if (withAutoValidation) {
              setValidation({
                status: e.target.validity.valid ? 'valid' : 'error',
                message: e.target.validationMessage,
              });
            }
            onBlur(e);
          }}
          onWheel={(e) => {
            if (type === 'number') {
              e.target.blur();
            }
          }}
          ref={ref}
          required={required}
          type={type}
          {...dataAttributes.filterAll(remainingProps)}
        />
      )}
      {internalMessage && internalMessageType && (
        <p className={`fr-${internalMessageType}-text`}>{internalMessage}</p>
      )}
    </div>
  );
});

TextInput.defaultProps = {
  className: '',
  disabled: false,
  hint: '',
  label: null,
  message: '',
  messageType: '',
  onBlur: () => {},
  required: false,
  textarea: false,
  type: 'text',
  withAutoValidation: false,
};

TextInput.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hint: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  label: PropTypes.string,
  message: PropTypes.string,
  messageType: PropTypes.oneOf(['error', 'valid', '']),
  onBlur: PropTypes.func,
  required: PropTypes.bool,
  textarea: PropTypes.bool,
  type: PropTypes.oneOf(['date', 'text', 'number', 'password', 'email']),
  withAutoValidation: PropTypes.bool,
};

export default TextInput;
