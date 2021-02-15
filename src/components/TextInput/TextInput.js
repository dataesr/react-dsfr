import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import '@gouvfr/all/dist/css/all.min.css';

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
    const getClasses = (messageType) => {
        switch (messageType) {
            case 'error':
                return ['rf-input-group rf-input-group--error', 'rf-input rf-input--error'];
            case 'valid':
                return ['rf-input-group rf-input-group--valid', 'rf-input rf-input--valid'];
            default:
                return ['rf-input-group', 'rf-input'];
        }
    };
    let describer = (hint) ? 'text-input-hint' : 'text-input-message';
    return (
        <div className={getClasses(messageType)[0]}>
            {label && <label className="rf-label" aria-describedby={describer}>{label}</label>}
            {hint && <p className="rf-hint-text" id="text-input-hint">{hint}</p>}
            {
                (textarea)
                    ? <textarea ref={ref} className={getClasses(messageType)[1]} disabled={inactive} id="text-input"
                                value={value} onChange={onChange}/>
                    : <input ref={ref} className={getClasses(messageType)[1]} disabled={inactive} type="text"
                             id="text-input" value={value} onChange={onChange}/>
            }
            {(message && messageType === 'error') && <p id="text-input-message" className="rf-error-text">{message}</p>}
            {(message && messageType === 'valid') && <p id="text-input-message" className="rf-valid-text">{message}</p>}
        </div>
    );
});
TextInput.defaultProps = {
    textarea: false,
    inactive: false,
};
TextInput.propTypes = {
    textarea: PropTypes.bool,
    inactive: PropTypes.bool,
    label: PropTypes.string.isRequired,
    hint: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    messageType: PropTypes.oneOf(['error', 'valid']),
    message: PropTypes.string,
};

export default TextInput;
