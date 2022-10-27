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
    textarea,
    type,
    label,
    hint,
    message,
    messageType,
    className,
    required,
    onBlur,
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
      ) : (
        <input
          {...dataAttributes.filterAll(remainingProps)}
          aria-describedby={hint && hintId.current}
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
      )}
      {internalMessage && internalMessageType && (
        <p className={`fr-${internalMessageType}-text`}>{internalMessage}</p>
      )}
    </div>
  );
});

TextInput.defaultProps = {
  textarea: false,
  hint: '',
  messageType: '',
  message: '',
  label: null,
  className: '',
  type: 'text',
  required: false,
  withAutoValidation: false,
  onBlur: () => {},
};

TextInput.propTypes = {
  type: PropTypes.oneOf(['date', 'text', 'number', 'password', 'email']),
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
  className: PropTypes.string,
  withAutoValidation: PropTypes.bool,
  onBlur: PropTypes.func,
};

export default TextInput;
