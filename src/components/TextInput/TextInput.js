import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import '@gouvfr/all/dist/css/all.min.css';

/**
 * Les champs permettent à un utilisateur d'entrer du contenu et données.
 *
 * @visibleName Champ de saisie -- TextInput
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
      case 'error': return ['rf-input-group rf-input-group--error', 'rf-input rf-input--error'];
      case 'valid': return ['rf-input-group rf-input-group--valid', 'rf-input rf-input--valid'];
      default: return ['rf-input-group', 'rf-input'];
    }
  };
  let describer = null;
  describer = (hint) ? 'text-input-hint' : 'text-input-message';
  return (
    <div className={getClasses(messageType)[0]}>
      { label && <label className="rf-label" htmlFor="text-input" aria-describedby={describer}>{label}</label> }
      { hint && <p className="rf-hint-text" id="text-input-hint">{hint}</p> }
      {
        (textarea)
          ? <textarea ref={ref} className={getClasses(messageType)[1]} disabled={inactive} type="text" id="text-input" value={value} onChange={onChange} />
          : <input ref={ref} className={getClasses(messageType)[1]} disabled={inactive} type="text" id="text-input" value={value} onChange={onChange} />
      }
      { (message && messageType === 'error') && <p id="text-input-message" className="rf-error-text">{message}</p> }
      { (message && messageType === 'valid') && <p id="text-input-message" className="rf-valid-text">{message}</p> }
    </div>
  );
});
TextInput.defaultProps = {
  textarea: false,
  inactive: false,
  message: null,
  hint: null,
  messageType: null,
};
TextInput.propTypes = {
  /**
  * Sets the input type as textarea
  */
  textarea: PropTypes.bool,
  /**
  * Sets the input state to inactive
  */
  inactive: PropTypes.bool,
  /**
  * Input label
  */
  label: PropTypes.string.isRequired,
  /**
  * A hint to complement the input label
  */
  hint: PropTypes.string,
  /**
  * THe input current value
  */
  value: PropTypes.string.isRequired,
  /**
  * A function that handles value change
  */
  onChange: PropTypes.func.isRequired,
  /**
  * Controls the valid and error state
  */
  messageType: PropTypes.oneOf(['error', 'valid']),
  /**
  * A message to display on error and valid input
  */
  message: PropTypes.string,
};

export default TextInput;
