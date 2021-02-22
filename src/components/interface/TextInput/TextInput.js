import { forwardRef } from 'react';
import PropTypes from 'prop-types';

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
  } = props;

  const getClasses = (type) => {
    switch (type) {
      case 'error':
        return ['rf-input-group rf-input-group--error', 'rf-input rf-input--error'];
      case 'valid':
        return ['rf-input-group rf-input-group--valid', 'rf-input rf-input--valid'];
      default:
        return ['rf-input-group', 'rf-input'];
    }
  };

  const describer = (hint) ? 'text-input-hint' : 'text-input-message';
  return (
  // TODO Manage Label htmlFor
    <div className={getClasses(messageType)[0]}>
      {label && <label className="rf-label" htmlFor="text-input" aria-describedby={describer}>{label}</label>}
      {hint && <p className="rf-hint-text" id="text-input-hint">{hint}</p>}
      {
        (textarea)
          ? (
            <textarea
              ref={ref}
              className={getClasses(messageType)[1]}
              disabled={inactive}
              id="text-input"
              value={value}
              onChange={onChange}
            />
          )
          : (
            <input
              ref={ref}
              className={getClasses(messageType)[1]}
              disabled={inactive}
              type="text"
              id="text-input"
              value={value}
              onChange={onChange}
            />
          )
    }
      {(message && messageType === 'error') && <p id="text-input-message" className="rf-error-text">{message}</p>}
      {(message && messageType === 'valid') && <p id="text-input-message" className="rf-valid-text">{message}</p>}
    </div>
  );
});
TextInput.defaultProps = {
  textarea: false,
  inactive: false,
  hint: '',
  onChange: () => {},
  messageType: 'valid',
  message: '',
  label: null,
};
TextInput.propTypes = {
  textarea: PropTypes.bool,
  inactive: PropTypes.bool,
  label: PropTypes.string,
  hint: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  messageType: PropTypes.oneOf(['error', 'valid']),
  message: PropTypes.string,
};

export default TextInput;
