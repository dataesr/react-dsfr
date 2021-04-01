import '@gouvfr/dsfr/dist/css/inputs.min.css';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

/**
 * Les champs permettent à un utilisateur d'entrer du contenu et données.
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
  } = props;

  const _classNameWrapper = classNames('rf-input-group', {
    [`rf-input-group--${messageType}`]: messageType,
  }, className);
  const _className = classNames('rf-input', {
    [`rf-input--${messageType}`]: messageType,
  });

  const inputId = uuidv4();
  const hintId = hint && uuidv4();
  const messageId = message && uuidv4();
  return (
    <div className={_classNameWrapper}>
      {label && <label className="rf-label" htmlFor={inputId} aria-describedby={hintId || messageId || undefined}>{label}</label>}
      {hint && <p className="rf-hint-text" id={hintId}>{hint}</p>}
      {
        (textarea)
          ? (
            <textarea
              ref={ref}
              className={_className}
              disabled={inactive}
              id={inputId}
              value={value}
              onChange={onChange}
            />
          )
          : (
            <input
              ref={ref}
              className={_className}
              disabled={inactive}
              type="text"
              id="text-input"
              value={value}
              onChange={onChange}
            />
          )
    }
      {(message && messageType === 'error') && <p id={messageId} className="rf-error-text">{message}</p>}
      {(message && messageType === 'valid') && <p id={messageId} className="rf-valid-text">{message}</p>}
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
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default TextInput;
