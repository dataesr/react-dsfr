import PropTypes from 'prop-types';
import '@gouvfr/all/dist/css/all.min.css';

const TextInput = (props) => {
  const {
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
  const describer = (hint) ? "text-input-hint" : "text-input-message";
  return (
    <div class={`rf-input-group${getType(messageType)[0]}`}>
      { label && <label class="rf-label" for="text-input" aria-describedby={describer}>{label}</label> }
      { hint && <p class="rf-hint-text" id="text-input-hint">{hint}</p> }
      <input class={`rf-input${getType(messageType)[1]}`} disabled={inactive} type="text" id="text-input" value={value} onChange={onChange} />
      { (message && messageType === "error") && <p id="text-input-message" class="rf-error-text">{message}</p> }
      { (message && messageType === "success") && <p id="text-input-message" class="rf-error-text">{message}</p> }
    </div>
  )
}

TextInput.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextInput;
