import React, { forwardRef, useRef } from 'react';

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
    type,
    ...remainingProps
  } = props;

  const _classNameWrapper = classNames('fr-input-group', {
    [`fr-input-group--${messageType}`]: messageType,
  }, className);
  const _className = classNames('fr-input', {
    [`fr-input--${messageType}`]: messageType,
  });

  const inputId = useRef(uuidv4());
  const hintId = useRef(uuidv4());
  return (
    <div
      className={_classNameWrapper}
      {...dataAttributes(remainingProps)}
    >
      {label && (
      <label
        className="fr-label"
        htmlFor={inputId.current}
        aria-describedby={hint && hintId.current}
      >
        {label}
        {required && <span className="error"> *</span>}
      </label>
      )}
      {hint && <p className="fr-hint-text" id={hintId.current}>{hint}</p>}
      {
        (textarea)
          ? (
            <textarea
              ref={ref}
              className={_className}
              disabled={inactive}
              id={inputId.current}
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
              type={type}
              id={inputId.current}
              value={value}
              placeholder={placeholder}
              pattern={pattern}
              title={title}
              required={required}
              onChange={onChange}
            />
          )
    }
      {(message && messageType === 'error') && <p className="fr-error-text">{message}</p>}
      {(message && messageType === 'valid') && <p className="fr-valid-text">{message}</p>}
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
  type: 'text',
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
  type: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default TextInput;
