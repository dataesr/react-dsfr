import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import '@gouvfr/all/dist/css/all.min.css';

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
  const getType = (messageType) => {
    switch (messageType) {
      case 'error': return [" rf-input-group--error", " rf-input--error"];
      case 'valid': return [" rf-input-group--valid", "rf-input--valid"];
      default: return "";
    }
  }
  let describer = null;
  describer = (hint) ? "text-input-hint" : "text-input-message";
  return (
    <div class={`rf-input-group${getType(messageType)[0]}`}>
      { label && <label class="rf-label" for="text-input" aria-describedby={describer}>{label}</label> }
      { hint && <p class="rf-hint-text" id="text-input-hint">{hint}</p> }
      {
        (textarea)
          ? <textarea ref={ref} class={`rf-input${getType(messageType)[1]}`} disabled={inactive} type="text" id="text-input" value={value} onChange={onChange} />
          : <input ref={ref} class={`rf-input${getType(messageType)[1]}`} disabled={inactive} type="text" id="text-input" value={value} onChange={onChange} />
      }
      <input ref={ref} class={`rf-input${getType(messageType)[1]}`} disabled={inactive} type="text" id="text-input" value={value} onChange={onChange} />
      { (message && messageType === "error") && <p id="text-input-message" class="rf-error-text">{message}</p> }
      { (message && messageType === "success") && <p id="text-input-message" class="rf-error-text">{message}</p> }
    </div>
  );
});

TextInput.propTypes = {
  /**
  * Sets the input state to inactive
  */
  inactive: PropTypes.string.isRequired,
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
  messageType: PropTypes.oneOf(["error", "valid"]),
  /**
  * A message to display on error and valid input
  */
  message: PropTypes.string,
};

export default TextInput;
