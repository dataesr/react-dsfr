import PropTypes from 'prop-types';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

/**
 *
 * @visibleName Radio
 */
const Radio = (props) => {
  const {
    className,
    hint,
    id,
    isExtended,
    label,
    message,
    messageType,
    onChange,
    size,
    style,
    value,
  } = props;

  const messageClasses = (messageType !== '') ? `rf-radio-group--${messageType}` : null;
  const extendedClasses = (isExtended) ? 'rf-radio-rich' : null;
  const sizeClass = (size !== 'md') ? 'rf-radio-group--sm' : null;
  const _className = classNames('rf-radio-group', extendedClasses, className, messageClasses, sizeClass);
  const _labelClassName = classNames('rf-label', { 'rf-ifi-no-icon': isExtended });
  const radioId = id || uuidv4();
  const messageId = uuidv4();

  return (
    <div className={_className}>
      <input
        data-testid="radio-testid"
        type="radio"
        id={radioId}
        name="radio"
        onChange={onChange}
        value={value}
      />
      <label className={_labelClassName} htmlFor={radioId} {...(style && { style })}>{label}</label>
      {hint && <span className="rf-hint-text">{hint}</span>}
      {(message && messageType) && <p id={messageId} className={`rf-${messageType}-text`}>{message}</p>}
    </div>
  );
};

Radio.defaultProps = {
  className: '',
  hint: '',
  id: null,
  isExtended: false,
  size: 'md',
  onChange: () => {},
  messageType: '',
  message: '',
  style: null,
};

Radio.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  hint: PropTypes.string,
  id: PropTypes.string,
  isExtended: PropTypes.bool,
  label: PropTypes.string.isRequired,
  message: PropTypes.string,
  messageType: PropTypes.oneOf(['error', 'valid', '']),
  onChange: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md']),
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  value: PropTypes.string.isRequired,
};

export default Radio;
